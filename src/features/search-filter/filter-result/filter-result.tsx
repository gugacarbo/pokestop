import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SearchFilter } from "../schemas/search-filter-schema";

import { CopyToClipboardButton } from "./copy-to-clipboard-button";
import { useTranslations } from "next-intl";
import { ResetSearchButton } from "./reset-search-button";
import { PresetSelector } from "../presets/preset-selector";
import { useParseFilters } from "../hooks/str-parsers";
import { useMemo } from "react";

function concatObjectValues(obj: object) {
  return Object.values(obj).reduce((acc, value) => {
    if (typeof value === "string") {
      if (value === "") return acc;
      return acc + (acc !== "" ? "&" : "") + value;
    }
    return acc + (acc !== "" ? "&" : "") + concatObjectValues(value);
  }, "");
}

export function FilterResult({
  result,
  reset,
}: {
  result: SearchFilter;
  reset: () => void;
}) {
  const t = useTranslations("filters");
  const parsed = useParseFilters(result);
  const p = useMemo(() => concatObjectValues(parsed), [parsed]);

  return (
    <Card className="w-full">
      <CardHeader className="py-3">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">{t("filter-results")}</div>
          <div className="flex items-center gap-4">
            <PresetSelector />
            <CopyToClipboardButton text={p} />
            <ResetSearchButton reset={reset} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <textarea
          className="bg-popover shadow-sm p-3 border border-border rounded-md w-full h-16 outline-none resize-none"
          readOnly
          value={p}
        />
      </CardContent>
    </Card>
  );
}
