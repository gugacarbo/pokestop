import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/locales";

// Can be imported from a shared config

export default getRequestConfig(async ({ locale = "en" }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = {
    main: (await import(`../locales/${locale}/main.json`)).default,
    rankings: (await import(`../locales/${locale}/rankings.json`)).default,
    filters: (await import(`../locales/${locale}/filters.json`)).default,
  };

  return {
    messages,
  };
});
