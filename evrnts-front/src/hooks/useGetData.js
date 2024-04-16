import { useState } from "react";

export const useGetData = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(null);
  };

  const fetchData = async (data = {}) => {
    setLoading(true);
    // const userData = JSON.parse(localStorage.getItem("user"));
    // if (userData) {
    //   headers.Authorization = `Bearer ${userData.jwt}`;
    // }
    const headers = {
      "Content-Type": "application/json",
    };
    const options = { method, headers };
    try {
      const response = await fetch(`https://dummyjson.com/${url}`, options);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
      // console.log( 'color: white; background-color: #26bfa5;', error);
      setError(`error`);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, data, loading, error, clearError };
};
