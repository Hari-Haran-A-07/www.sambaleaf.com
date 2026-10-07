import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) setStoredValue(JSON.parse(item));
    } catch {
      // fallback
    }
  }, [key]);

  const setValue = (val: T) => {
    try {
      setStoredValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch {
      // fallback
    }
  };

  return [storedValue, setValue];
}
