"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SearchFilter } from "../schemas/search-filter-schema";
import { parseFilters } from "../filter-str-parsers";

import { CopyToClipboardButton } from "./copy-to-clipboard-button";
import { useTranslations } from "next-intl";
import { ResetSearchButton } from "./reset-search-button";
import { PresetSelector } from "../presets/preset-selector";

export function FilterResult({
  result,
  reset,
}: {
  result: SearchFilter;
  reset: () => void;
}) {
  const value = Object.values(parseFilters(result))
    .filter((v) => v)
    .join("&");

  const t = useTranslations("filters");

  return (
    <Card className="w-full">
      <CardHeader className="py-3">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">{t("filter-results")}</div>
          <div className="flex items-center gap-4">
            <PresetSelector />
            <CopyToClipboardButton text={value} />
            <ResetSearchButton reset={reset} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="bg-popover shadow-sm p-3 border border-border rounded-md w-full h-16 outline-none resize-none">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
