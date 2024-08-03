"use client";
import React from "react";
import {  useTranslations } from "next-intl";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import { useFormContext } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { firstUpper } from "@/lib/text";

const aqFilter = {
  eggsonly: false,
  gbl: false,
  hatched: false,
  raid: false,
  research: false,
  rocket: false,
  traded: false,
};

function AcquirementFilter() {
  const t = useTranslations("filters");
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader className="flex-col space-y-0 pb-2">
        <CardTitle className="text-sm">
          {firstUpper(t("tags.acquirement.title"))}
        </CardTitle>
        <CardTitle className="text-muted-foreground text-xs">
          {firstUpper(t("tags.acquirement.subtitle"))}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-0">
        {Object.entries(aqFilter).map(([name, value]) => (
          <FormField
            key={name}
            control={control}
            name={`tags.acquirement.${name}`}
            render={({ field }) => (
              <FormItem className="flex justify-between items-center gap-2 capitalize">
                <FormLabel htmlFor={name} className="text-sm">
                  {/*@ts-ignore */}
                  {t(`tags.acquirement.${name}.name`)}
                </FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export { AcquirementFilter };
