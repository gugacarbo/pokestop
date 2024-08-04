"use client";

import { useEffect } from "react";
import { FieldValues, SetFieldValue, UseFormReset } from "react-hook-form";
import { ZodObject } from "zod";

interface PersistHookFormProps<T extends FieldValues> {
  watch: (names?: string | string[]) => T;
  setValue: SetFieldValue<T>;
  localKey: string;
  debounce?: number;
  debug?: boolean;
  reset: UseFormReset<T>;
  schema?: ZodObject<any>;
}

function usePersistHookForm<T extends FieldValues>({
  watch,
  setValue,
  localKey,
  reset,
  debounce = 500,
  schema,
}: PersistHookFormProps<T>) {
  const value = watch();

  useEffect(() => {
    const storedValue = localStorage.getItem(localKey);

    if (storedValue) {
      try {
        const parsed = JSON.parse(storedValue);

        if (schema) {
          const p = schema.safeParse(parsed)?.data as T;
          reset(p);
        } else {
          reset(parsed);
        }
      } catch (_) {}
    }
  }, [localKey, setValue, reset, schema]);

  useEffect(() => {
    const timeout = setTimeout(() => {
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

export { usePersistHookForm };
