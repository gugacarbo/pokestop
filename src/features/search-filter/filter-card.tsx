import React from "react";
import { NestedKeyOf, useTranslations } from "next-intl";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { firstUpper } from "@/lib/text";
import { defaultValues } from "./schemas/search-filter-schema";

function FilterCard({
  filterKey,
  children,
}: {
  filterKey: NestedKeyOf<typeof defaultValues>;
  children: React.ReactNode;
}) {
  const t = useTranslations("filters");

  return (
    <Card className="flex-1 min-w-52 max-w-sm">
      <CardHeader className="flex-col space-y-0 pb-3">
        <CardTitle className="text-sm">
          {/* @ts-ignore */}
          {firstUpper(t(`${filterKey}.title`))}
        </CardTitle>
        <CardTitle className="text-muted-foreground text-xs">
          {/* @ts-ignore */}
          {firstUpper(t(`${filterKey}.subtitle`))}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-0">{children}</CardContent>
    </Card>
  );
}

export { FilterCard };
