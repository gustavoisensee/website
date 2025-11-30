// Simple in-memory cache
const cacheStore = new Map<string, { data: unknown; timestamp: number }>();

const DEFAULT_CACHE_TIME = 5 * 60 * 1000; // 5 minutes

interface CacheOptions {
  key: string;
  fetcher: () => Promise<unknown>;
  options?: {
    cacheTime?: number;
  };
}

/**
 * Fetches data with caching support
 * Returns cached data if available and not expired, otherwise fetches fresh data
 */
export const cache = async ({ key, fetcher, options }: CacheOptions): Promise<unknown> => {
  const cacheTime = options?.cacheTime ?? DEFAULT_CACHE_TIME;
  const cachedItem = cacheStore.get(key);
  const now = Date.now();

  // Check if we have valid cached data
  if (cachedItem && now - cachedItem.timestamp < cacheTime) {
    return cachedItem.data;
  }

  // Fetch fresh data
  const data = await fetcher();
  cacheStore.set(key, { data, timestamp: now });
  
  return data;
};

/**
 * Clears a specific cache entry or all cache if no key provided
 */
export const clearCache = (key?: string): void => {
  if (key) {
    cacheStore.delete(key);
  } else {
    cacheStore.clear();
  }
};

/**
 * Gets cached data without fetching (returns undefined if not cached or expired)
 */
export const getCachedData = (
  key: string,
  options?: { cacheTime?: number }
): unknown | undefined => {
  const cacheTime = options?.cacheTime ?? DEFAULT_CACHE_TIME;
  const cachedItem = cacheStore.get(key);
  const now = Date.now();

  if (cachedItem && now - cachedItem.timestamp < cacheTime) {
    return cachedItem.data;
  }

  return undefined;
};

