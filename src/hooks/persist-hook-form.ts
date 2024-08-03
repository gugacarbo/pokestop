"use client";

import { useEffect } from "react";
import { FieldValues, SetFieldValue, UseFormReset } from "react-hook-form";

interface PersistHookFormProps<T extends FieldValues> {
  watch: (names?: string | string[]) => T;
  setValue: SetFieldValue<T>;
  localKey: string;
  debounce?: number;
  debug?: boolean;
  reset: UseFormReset<T>;
}

function persistHookForm<T extends FieldValues>({
  watch,
  setValue,
  localKey,
  reset,
  debounce = 500,
}: PersistHookFormProps<T>) {
  const value = watch();

  useEffect(() => {
    const storedValue = localStorage.getItem(localKey);

    if (storedValue) {
      const parsed = JSON.parse(storedValue);

      reset(parsed);

      console.log("updated", parsed);
    }
  }, [localKey, setValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("persisted", value);
      localStorage.setItem(localKey, JSON.stringify(value));
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, localKey, setValue, watch]);

  function handleReset() {
    localStorage.removeItem(localKey);
  }

  return {
    reset: handleReset,
  };
}

export { persistHookForm };
