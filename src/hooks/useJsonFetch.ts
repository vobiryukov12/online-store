import { useEffect, useState } from "react";

export default function useJsonFetch<T>(url: string, opts = {}) {
  const [data, setData] = useState<T | null>(null);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData(url: string, abortController: AbortController = new AbortController()) {
    try {
      setError('');
      setLoading(true); 

      const response = await fetch(url, {signal: abortController.signal, ...opts});

      if (!response.ok) {
        setLoading(false);
        setError(`Ошибка! статус: ${response.status}`);
        return;
      }

      const responseData = await response.json();
      setNumberOfElements(responseData.length);

      setData(prevData => {
        if (!prevData) {
          return responseData;
        } else if (Array.isArray(prevData)) {
          return [...prevData, ...responseData];
        }
      });
    
      setLoading(false);
    } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setLoading(false);
          const error = new Error('Ошибка!');
          setError(error.message);
        }
    }
  }

  useEffect(() => {
    const abortController = new AbortController();

    fetchData(url, abortController);

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [ data, fetchData, numberOfElements, setData, loading, error ] as const;
}
