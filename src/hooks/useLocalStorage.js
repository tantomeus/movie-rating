import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(localStorage.getItem(key)) : initialState;
  });

  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]);

  return [value, setValue]
}