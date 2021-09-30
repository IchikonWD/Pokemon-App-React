import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(url);
      setResult(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return { loading, result };
};

export default useFetch;
