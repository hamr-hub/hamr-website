type MetricName = 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP'

interface Metric {
  name: MetricName
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

function reportMetric(metric: Metric) {
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`)
  }
  if (typeof window !== 'undefined' && 'navigator' in window && navigator.sendBeacon) {
    const data = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      url: window.location.href,
      ts: Date.now(),
    })
    navigator.sendBeacon('/api/vitals', data)
  }
}

function getRating(name: MetricName, value: number): Metric['rating'] {
  const thresholds: Record<MetricName, [number, number]> = {
    CLS: [0.1, 0.25],
    FID: [100, 300],
    FCP: [1800, 3000],
    LCP: [2500, 4000],
    TTFB: [800, 1800],
    INP: [200, 500],
  }
  const [good, poor] = thresholds[name]
  if (value <= good) return 'good'
  if (value <= poor) return 'needs-improvement'
  return 'poor'
}

export function measureWebVitals() {
  if (typeof PerformanceObserver === 'undefined') return

  const observe = (type: string, cb: (entries: PerformanceEntryList) => void) => {
    try {
      const observer = new PerformanceObserver((list) => cb(list.getEntries()))
      observer.observe({ type, buffered: true })
    } catch {}
  }

  observe('largest-contentful-paint', (entries) => {
    const last = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
    const value = last.startTime
    reportMetric({ name: 'LCP', value, rating: getRating('LCP', value) })
  })

  observe('first-input', (entries) => {
    const entry = entries[0] as PerformanceEntry & { processingStart: number; startTime: number }
    const value = entry.processingStart - entry.startTime
    reportMetric({ name: 'FID', value, rating: getRating('FID', value) })
  })

  observe('layout-shift', (entries) => {
    let cls = 0
    for (const entry of entries as Array<PerformanceEntry & { value: number; hadRecentInput: boolean }>) {
      if (!entry.hadRecentInput) cls += entry.value
    }
    reportMetric({ name: 'CLS', value: cls, rating: getRating('CLS', cls) })
  })

  const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
  if (navEntries.length > 0) {
    const ttfb = navEntries[0].responseStart - navEntries[0].requestStart
    reportMetric({ name: 'TTFB', value: ttfb, rating: getRating('TTFB', ttfb) })
  }

  observe('paint', (entries) => {
    const fcp = entries.find((e) => e.name === 'first-contentful-paint')
    if (fcp) {
      reportMetric({ name: 'FCP', value: fcp.startTime, rating: getRating('FCP', fcp.startTime) })
    }
  })
}
