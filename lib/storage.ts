interface StorageEnvelope<T> {
  value: T;
  expiry?: number; // timestamp in ms
}

const memoryFallback = new Map<string, string>();

function isStorageAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const testKey = '__sambaleaf_storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Stores an item in localStorage with an optional expiration time in seconds.
 */
export function setStoredItem<T>(key: string, value: T, ttlSeconds?: number): boolean {
  try {
    const envelope: StorageEnvelope<T> = {
      value,
      expiry: ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined
    };
    const serialized = JSON.stringify(envelope);

    if (isStorageAvailable()) {
      window.localStorage.setItem(key, serialized);
    } else {
      memoryFallback.set(key, serialized);
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Retrieves an item from storage. Returns defaultValue if missing or expired.
 */
export function getStoredItem<T>(key: string, defaultValue: T): T {
  try {
    let raw: string | null = null;
    if (isStorageAvailable()) {
      raw = window.localStorage.getItem(key);
    } else {
      raw = memoryFallback.get(key) || null;
    }

    if (!raw) return defaultValue;

    const envelope: StorageEnvelope<T> = JSON.parse(raw);

    // Check expiry if set
    if (envelope.expiry && Date.now() > envelope.expiry) {
      removeStoredItem(key);
      return defaultValue;
    }

    return envelope.value;
  } catch {
    return defaultValue;
  }
}

/**
 * Removes an item from storage and in-memory cache.
 */
export function removeStoredItem(key: string): void {
  try {
    if (isStorageAvailable()) {
      window.localStorage.removeItem(key);
    }
    memoryFallback.delete(key);
  } catch {
    // Ignore error
  }
}
