import { useState } from "react";

export const useGetData = (cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(null);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await cb()
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(`error`);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, data, loading, error, clearError };
};
