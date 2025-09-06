// Tiny per-IP token bucket (good enough for a portfolio)
const buckets = new Map<string, { tokens: number; updated: number }>();

export function rateLimit(ip: string, limitPerMin = 10): boolean {
  const now = Date.now();
  const refillMs = 60_000;
  const b = buckets.get(ip) ?? { tokens: limitPerMin, updated: now };
  const delta = now - b.updated;
  const refill = (delta / refillMs) * limitPerMin;
  b.tokens = Math.min(limitPerMin, b.tokens + refill);
  b.updated = now;
  if (b.tokens < 1) {
    buckets.set(ip, b);
    return false;
  }
  b.tokens -= 1;
  buckets.set(ip, b);
  return true;
}
