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

export function isAnalyticsAvailable() {
  return Boolean(measurementId)
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const saved = localStorage.getItem(consentKey)
    return saved === 'granted' || saved === 'denied' ? saved : null
  } catch {
    return null
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  try {
    localStorage.setItem(consentKey, consent)
  } catch {
    // The preference applies for this visit when browser storage is unavailable.
  }

  if (consent === 'granted') startAnalytics()
  if (consent === 'denied' && window.gtag) {
    window.gtag('consent', 'update', { analytics_storage: 'denied' })
  }
}

export function resetAnalyticsConsent() {
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

  router.afterEach((to) => {
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
  window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args))
  window.gtag('js', new Date())
  window.gtag('consent', 'default', { analytics_storage: 'granted' })
  window.gtag('config', measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.hash}`,
    page_title: document.title,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.append(script)
}
