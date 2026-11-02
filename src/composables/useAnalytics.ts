import type { Router } from 'vue-router'

type AnalyticsConsent = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const consentKey = 'floorinstall.analyticsConsent'
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
let analyticsStarted = false
let visitConsent: AnalyticsConsent | null | undefined

export function isAnalyticsAvailable() {
  return Boolean(measurementId)
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (visitConsent !== undefined) return visitConsent
  try {
    const saved = localStorage.getItem(consentKey)
    return saved === 'granted' || saved === 'denied' ? saved : null
  } catch {
    return null
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  visitConsent = consent
  try {
    localStorage.setItem(consentKey, consent)
  } catch {
    // The preference applies for this visit when browser storage is unavailable.
  }

  if (consent === 'granted') {
    if (analyticsStarted) {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
      trackPageView()
    } else {
      startAnalytics()
    }
  }
  if (consent === 'denied' && window.gtag) {
    window.gtag('consent', 'update', { analytics_storage: 'denied' })
  }
}

export function resetAnalyticsConsent() {
  visitConsent = null
  try {
    localStorage.removeItem(consentKey)
  } catch {
    // The consent prompt can still be shown for this visit.
  }

  if (window.gtag) {
    window.gtag('consent', 'update', { analytics_storage: 'denied' })
  }
}

export function setupAnalytics(router: Router) {
  if (!isAnalyticsAvailable()) return

  if (getAnalyticsConsent() === 'granted') startAnalytics()

  router.afterEach((to, _from, failure) => {
    if (failure) return
    if (!analyticsStarted || getAnalyticsConsent() !== 'granted') return
    window.gtag?.('event', 'page_view', {
      page_location: window.location.href,
      page_path: to.fullPath,
      page_title: document.title,
    })
  })
}

function startAnalytics() {
  if (!isAnalyticsAvailable() || analyticsStarted || !measurementId) return

  analyticsStarted = true
  window.dataLayer = window.dataLayer ?? []
  window.gtag = window.gtag ?? function () {
    // gtag.js expects Arguments objects, not arrays made from rest parameters.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }
  window.gtag('consent', 'default', { analytics_storage: 'granted' })
  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
  trackPageView()

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.append(script)
}

function trackPageView() {
  if (getAnalyticsConsent() !== 'granted') return
  window.gtag?.('event', 'page_view', {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    page_title: document.title,
  })
}
