"use client";

import { useEffect, useReducer } from "react";
import { useLocalStorage } from "usehooks-ts";

function useLocalStorageReducerState<T extends object, S>(
  key: string,
  reducer: React.Reducer<T, S>,
  defaultValue: T
) {
  const [localValue, setLocalValue] = useLocalStorage(key, defaultValue);
  const [value, dispatch] = useReducer(reducer, localValue);

  useEffect(() => {
    setLocalValue(value);
  }, [value,setLocalValue]);

  return [value, dispatch] as const;
}

export { useLocalStorageReducerState };
