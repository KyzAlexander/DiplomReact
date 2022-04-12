import { useMemo } from "react";

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default function useDebounce(func, timeout = 500) {
  return useMemo(() => debounce(func, timeout), [func, timeout]);
}
