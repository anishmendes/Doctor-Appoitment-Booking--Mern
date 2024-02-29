import { useEffect, useState } from "react";
import { token } from "../config";

const useFetchData = (url) => {
  console.log("i am url", url);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();
        console.log("this is result from the hook", result);

        if (!res.ok) {
          throw new Error(result.message + "😭");
        }

        if (result.success === true) {
          setData(result.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
