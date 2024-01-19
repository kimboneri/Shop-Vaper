import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Fetch = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    Fetch();
  }, []);

  return {data};
};

export default useFetch;
