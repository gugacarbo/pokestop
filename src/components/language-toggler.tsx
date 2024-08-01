"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";
import { localeNames } from "@/locales";
import { ChevronDown } from "lucide-react";

export function LanguageToggle() {
  const t = useTranslations("main");
  const locale = useLocale();

  const pathname = usePathname();

  const currentPath = pathname.replace(/^\/*.\//, "/");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="min-w-32">
          {localeNames?.[locale as keyof typeof localeNames]}
          <span className="sr-only">{t("language.toggle")}</span>
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="capitalize">
        {Object.entries(localeNames).map(([locale, localeName]) => (
          <Link href={currentPath} key={locale} locale={locale}>
            <DropdownMenuItem className="w-full">{localeName}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
