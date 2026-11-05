export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export function logMetric(name: string, value: number): PerformanceMetric {
  let rating: 'good' | 'needs-improvement' | 'poor' = 'good';

  if (name === 'FCP') {
    if (value > 3000) rating = 'poor';
    else if (value > 1800) rating = 'needs-improvement';
  } else if (name === 'LCP') {
    if (value > 4000) rating = 'poor';
    else if (value > 2500) rating = 'needs-improvement';
  } else if (name === 'CLS') {
    if (value > 0.25) rating = 'poor';
    else if (value > 0.1) rating = 'needs-improvement';
  }

  const metric: PerformanceMetric = {
    name,
    value: +value.toFixed(2),
    rating,
    timestamp: Date.now()
  };

  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.debug(`[SAMBALEAF Web Vital] ${name}: ${value}ms (${rating})`);
  }

  return metric;
}

export function initWebVitalsObserver() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          logMetric('FCP', entry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });
  } catch {
    // Fail silently in environments where PerformanceObserver is restricted
  }
}
