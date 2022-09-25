import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: cancelToken.token })
      .then((response) => {
        setLoading(false);
        setData(response.data);
        setError(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(err.message);
        }
      });
    return () => cancelToken.cancel();
  }, [url]);

  return { loading, data, error };
};
export default useFetch;
