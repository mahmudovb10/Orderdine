import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("fetch error");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setIspending(false);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
};
