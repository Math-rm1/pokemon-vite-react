import axios, { AxiosResponse } from 'axios';
import { useState, useEffect, useCallback, useRef } from 'react';
import { PokemonResponse } from '../types/PokemonResponse';

function useFetch<T = unknown>(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    try {
      // reset error state
      setError(null);

      // init abort controller
      abortController.current = new AbortController();

      // set loading state
      setIsLoading(true);

      // fetch data
      const res: AxiosResponse = await axios.get(url, {
        signal: abortController.current.signal,
      });

      // set data if there is a results array
      if (res.data.results) {
        const dataResults = (await Promise.all(
          res.data.results.map(
            async (p: PokemonResponse) => (await axios.get(p.url)).data,
          ),
        )) as unknown as T;

        // set some state
        setData(dataResults);
        setPreviousUrl(res.data.previous);
        setNextUrl(res.data.next);
        setError(null);

        return;
      }

      // set data if there is no results array
      if (res.data) {
        // set some state
        setData(res.data as T);
        setError(null);
      }
      // if there is a error
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
      // executed in both cases
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    // fetch data on mount and if the url changes because fetchData uses the useCallback hook with the url as a dependency
    fetchData();

    // cleanup abort controller
    return () => abortController.current?.abort();
  }, [fetchData]);

  return { data, error, isLoading, previousUrl, nextUrl };
}

export default useFetch;
