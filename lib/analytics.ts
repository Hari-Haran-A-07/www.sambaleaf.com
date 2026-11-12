export type AnalyticsEventType =
  | 'view_dish'
  | 'add_to_cart'
  | 'remove_from_cart'
  | 'apply_coupon'
  | 'check_delivery_zone'
  | 'initiate_whatsapp_order'
  | 'view_reheating_guide';

export interface AnalyticsEvent {
  type: string;
  payload?: Record<string, unknown>;
  timestamp: number;
}

const EVENT_BUFFER: AnalyticsEvent[] = [];
const MAX_BUFFER_SIZE = 50;

/**
 * Tracks an event in memory with privacy-friendly payload sanitization.
 * Never stores personal identifiable information (PII) like phone numbers or home addresses.
 */
export function trackEvent(
  type: AnalyticsEventType | string,
  payload?: Record<string, unknown>
): AnalyticsEvent {
  const sanitizedPayload: Record<string, unknown> = {};

  if (payload) {
    for (const [key, val] of Object.entries(payload)) {
      // Omit keys that may contain PII
      const lower = key.toLowerCase();
      if (lower.includes('phone') || lower.includes('address') || lower.includes('name') || lower.includes('email')) {
        continue;
      }
      sanitizedPayload[key] = val;
    }
  }

  const event: AnalyticsEvent = {
    type,
    payload: sanitizedPayload,
    timestamp: Date.now()
  };

  EVENT_BUFFER.push(event);
  if (EVENT_BUFFER.length > MAX_BUFFER_SIZE) {
    EVENT_BUFFER.shift();
  }

  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // Development console breadcrumb
    // eslint-disable-next-line no-console
    console.debug(`[SAMBA LEAF Analytics] ${type}`, sanitizedPayload);
  }

  return event;
}

/**
 * Legacy telemetry integration hook (backward compatible).
 */
export function trackOrderEvent(eventName: string, data?: Record<string, unknown>): void {
  trackEvent(eventName, data);
}

/**
 * Retrieves a read-only copy of recent events.
 */
export function getBufferedEvents(): ReadonlyArray<AnalyticsEvent> {
  return [...EVENT_BUFFER];
}

/**
 * Clears the event buffer (useful for test isolation).
 */
export function clearBufferedEvents(): void {
  EVENT_BUFFER.length = 0;
}
