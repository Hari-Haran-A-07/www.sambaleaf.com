export function trackOrderEvent(eventName: string, data?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "production") {
    // telemetry integration hook
    console.log(`[SAMBALEAF Analytics] ${eventName}`, data);
  }
}
