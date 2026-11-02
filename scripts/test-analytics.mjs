import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

// Execute the real composable in an isolated browser mock, without contacting Google.
const source = readFileSync(new URL('../src/composables/useAnalytics.ts', import.meta.url), 'utf8')
const javascript = ts.transpileModule(
  source.replace('import.meta.env.VITE_GA_MEASUREMENT_ID', 'globalThis.measurementId'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } },
).outputText

function browser({ saved, blocked = false, id = 'G-TEST123456' } = {}) {
  const scripts = []
  const storage = new Map(saved ? [['floorinstall.analyticsConsent', saved]] : [])
  let navigate
  const context = vm.createContext({
    exports: {},
    measurementId: id,
    window: { location: { href: 'https://example.test/gallery?test=1', pathname: '/gallery', search: '?test=1', hash: '' } },
    document: { title: 'Galerija', createElement: () => ({}), head: { append: script => scripts.push(script) } },
    localStorage: {
      getItem: key => { if (blocked) throw Error('blocked'); return storage.get(key) ?? null },
      setItem: (key, value) => { if (blocked) throw Error('blocked'); storage.set(key, value) },
      removeItem: key => { if (blocked) throw Error('blocked'); storage.delete(key) },
    },
  })
  vm.runInContext(javascript, context)
  const api = context.exports
  api.setupAnalytics({ afterEach: hook => { navigate = hook } })
  const messages = () => context.window.dataLayer || []
  const pageViews = () => messages().filter(m => m[0] === 'event' && m[1] === 'page_view')
  return { api, scripts, messages, pageViews, navigate: failure => navigate({ fullPath: '/services' }, {}, failure) }
}

const fresh = browser()
assert.equal(fresh.scripts.length, 0, 'No Google script before consent')
fresh.api.setAnalyticsConsent('denied')
fresh.navigate()
assert.equal(fresh.messages().length, 0, 'No commands for a first-time refusal')
fresh.api.setAnalyticsConsent('granted')
assert.equal(fresh.scripts.length, 1)
assert(fresh.messages().every(m => Object.prototype.toString.call(m) === '[object Arguments]'))
assert.equal(fresh.messages()[0][0], 'consent', 'Consent precedes initialization')
assert.equal(fresh.pageViews().length, 1)
assert.equal(fresh.pageViews()[0][2].page_path, '/gallery?test=1')
fresh.navigate()
assert.equal(fresh.pageViews().length, 2)
fresh.navigate(new Error('cancelled navigation'))
assert.equal(fresh.pageViews().length, 2)
fresh.api.setAnalyticsConsent('denied')
fresh.navigate()
assert.equal(fresh.pageViews().length, 2, 'Refusal stops route tracking')
fresh.api.setAnalyticsConsent('granted')
assert.equal(fresh.scripts.length, 1, 'Reaccepting does not duplicate the script')
assert.equal(fresh.messages().at(-2)[2].analytics_storage, 'granted')
assert.equal(fresh.pageViews().length, 3)
fresh.api.resetAnalyticsConsent()
fresh.navigate()
assert.equal(fresh.api.getAnalyticsConsent(), null)
assert.equal(fresh.pageViews().length, 3)
fresh.api.setAnalyticsConsent('granted')
assert.equal(fresh.messages().at(-2)[2].analytics_storage, 'granted')

assert.equal(browser({ saved: 'granted' }).scripts.length, 1)
assert.equal(browser({ saved: 'denied' }).scripts.length, 0)
const disabled = browser({ id: '' })
disabled.api.setAnalyticsConsent('granted')
assert.equal(disabled.scripts.length, 0)
const restricted = browser({ blocked: true })
restricted.api.setAnalyticsConsent('granted')
restricted.navigate()
assert.equal(restricted.pageViews().length, 2, 'Consent works even without localStorage')
restricted.api.setAnalyticsConsent('denied')
restricted.navigate()
assert.equal(restricted.pageViews().length, 2)
console.log('Analytics tests passed: command format, consent, reconsent, navigation, disabled storage.')
