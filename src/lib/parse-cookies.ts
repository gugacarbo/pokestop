"use server";

import { cookies } from "next/headers";

export async function parseCookies<T>(
  key: string,
  defaultValue: T,
  parser?: (value: T) => T
): Promise<T> {
  try {
    const cookieStore = cookies();
    const value = cookieStore.get(key)?.value || "{}";

    const parsed = JSON.parse(value);

    if (parser) {
      return parser(parsed);
    }

    return parsed;
  } catch (err) {
    return defaultValue;
  }
}
