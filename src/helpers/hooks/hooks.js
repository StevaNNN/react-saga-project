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
