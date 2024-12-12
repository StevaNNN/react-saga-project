import { useEffect, useState } from "react";

export const useDebounce = (text = "", timeout = 1000) => {
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    let timeouter = setTimeout(() => {
      setDebouncedText(text);
    }, timeout);
    return () => {
      clearTimeout(timeouter);
    };
  }, [text, timeout]);

  return debouncedText;
};

export const useFetch = ({ api, onSuccess, onError }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(api);
        const data = await response.json();
        setLoading(false);
        setData(data);
        onSuccess && onSuccess();
      } catch (e) {
        onError && onError(e.response.data);
      }
    };
    if (api) fetchData();
    // if we add this onError or onSuccess as deps here
    // we need to make sure they are wrapped with useCallback hook
    // because they are recreated on each re-render without it with useCallback react caches those callbacks
  }, [api, onError, onSuccess]);

  if (api) {
    return { data, setData, loading };
  }
  return null;
};
