import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { useState, useEffect } from 'react';

export function useFetch<T = unknown>(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res: AxiosResponse = await axios.get(url, {
          cancelToken: source.token,
        });

        if (res.data.results) {
          const dataResults = (await Promise.all(
            res.data.results.map(
              async (p: any) => (await axios.get(p.url)).data,
            ),
          )) as unknown as T;

          setData(dataResults);
          setPreviousUrl(res.data.previous);
          setNextUrl(res.data.next);
        } else {
          setData(res.data as T);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, error, isLoading, previousUrl, nextUrl };
}
