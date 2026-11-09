import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'

const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])
const projects = JSON.parse(await readFile('public/gallery-seed.json', 'utf8')).filter(p => p.published)
const titles = new Set()
assert.equal(urls.length, 6 + 7 + projects.length)
for (const url of urls) {
  const path = new URL(url).pathname
  const html = await readFile('dist' + (path === '/' ? '' : path) + '/index.html', 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert(title && !titles.has(title), 'Missing or duplicate title: ' + path)
  titles.add(title)
  assert(html.includes('rel="canonical" href="' + url + '"'), 'Canonical mismatch: ' + path)
  assert(html.includes('content="index, follow, max-image-preview:large"'))
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1)
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'Exactly one rendered H1: ' + path)
  assert(html.includes('id="seo-schema"'))
  assert(!html.includes('<div id="app"></div>'), 'Empty HTML: ' + path)
  const schema = html.match(/id="seo-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
  assert(JSON.parse(schema)['@graph'].length >= 2)
}
for (const project of projects) assert(urls.includes('https://floorinstall.lv/gallery/' + project.id))
const missing = await readFile('dist/404.html', 'utf8')
assert(missing.includes('noindex, follow'))
assert(missing.includes('Lapa nav atrasta'))
const apache = await readFile('dist/.htaccess', 'utf8')
assert(apache.includes('[R=404,L]'))
assert(apache.includes('ErrorDocument 404 /404.html'))
assert(apache.includes('RewriteCond %{HTTPS} !=on [OR]'))
assert(apache.includes('^www\\.floorinstall\\.lv'))
assert(apache.includes('RewriteRule ^ https://floorinstall.lv%{REQUEST_URI} [R=301,L,NE]'))
assert(apache.indexOf('[R=301,L,NE]') < apache.indexOf('%{REQUEST_FILENAME}/index.html'), 'Domain redirect must run before page rewrites')
console.log('SEO tests passed: ' + urls.length + ' unique rendered pages, canonicals, headings, schema, sitemap and 404.')
