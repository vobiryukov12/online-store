import { useEffect, useState } from "react";

export default function useJsonFetch<T>(url: string, opts = {}) {
  const [data, setData] = useState<T | null>(null);
  const [numberOfElements, setNumberOfElements] = useState(0);

  async function fetchData(url: string, prevData = []) {
    const response = await fetch(url, opts);
    const responseData = await response.json();
    setNumberOfElements(responseData.length);
    setData([...prevData, ...responseData]);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [ data, fetchData, numberOfElements, setData ] as const;
}
