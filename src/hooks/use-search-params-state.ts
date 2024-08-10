"use client"
import { usePathname, useRouter } from "@/lib/navigation";
import { useSearchParams } from "next/navigation";

function useSearchParamsState(key: string) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const value = searchParams.get(key) ?? "";
  const setValue = (value?: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!value) {
      current.delete(key);
    } else {
      current.set(key, value);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return [value, setValue] as const;
}

export { useSearchParamsState };
