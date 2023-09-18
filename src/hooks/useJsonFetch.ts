import { useEffect, useState } from "react";

export default function useJsonFetch<T>(url: string, opts = {}) {
  const [data, setData] = useState<T | null>(null);

  async function fetchData() {
    const response = await fetch(url, opts);
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [ data ] as const;
}
