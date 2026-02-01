import { useEffect, useState } from 'preact/hooks';
import { cache, getCachedData } from '../helpers/cache';

interface UseQueryOptions {
  queryKey: string[];
  queryFn: () => Promise<unknown>;
}

/**
 * Custom hook to fetch and cache data, with loading and error state management.
 * @param options.queryKey Unique cache key for the query.
 * @param options.queryFn Function to fetch data (should return a Promise).
 * @returns Object containing data, error, and loading state.
 */
const useQuery = ({ queryKey, queryFn }: UseQueryOptions) => {
  const key = queryKey.join('-');
  const [data, setData] = useState<unknown>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we have valid cached data
    const cachedData = getCachedData(key);
    if (cachedData !== undefined) {
      setData(cachedData);
      setIsLoading(false);
      return;
    }

    // Fetch fresh data with caching
    setIsLoading(true);
    cache({ key, fetcher: queryFn })
      .then((result) => {
        setData(result);
        setError(undefined);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [key]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useQuery;
