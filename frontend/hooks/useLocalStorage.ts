"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState(initialValue);

  const [isLoaded, setIsLoaded] =
    useState(false);

  useEffect(() => {
    try {
      const item =
        localStorage.getItem(key);

      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoaded(true);
  }, [key]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }, [key, value, isLoaded]);

  return {
    value,
    setValue,
    isLoaded,
  };
}