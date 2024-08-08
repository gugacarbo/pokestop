import React from "react";
import { NestedKeyOf, useTranslations } from "next-intl";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { firstUpper } from "@/lib/text";
import { defaultValues } from "./schemas/search-filter-schema";
import { cn } from "@/lib/utils";

function FilterCard({
  filterKey,
  children,
  className,
}: {
  filterKey: NestedKeyOf<typeof defaultValues>;
  children: React.ReactNode;
  className?: string;
}) {
  const t = useTranslations("filters");

  return (
    <Card
      className={cn("flex flex-col flex-1 min-w-52 sm:max-w-sm", className)}
    >
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
      <CardContent className="flex flex-col flex-1 gap-2 pt-0">
        {children}
      </CardContent>
    </Card>
  );
}

export { FilterCard };
