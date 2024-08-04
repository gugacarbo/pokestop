"use client";
import React from "react";
import { useMessages, useTranslations } from "next-intl";

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
import { NotInput } from "../../components/NotInput";
import { defaultValues } from "../../schemas/search-filter-schema";


function RegionFilter() {
  const t = useTranslations("filters");
  const { control } = useFormContext();


  return (
    <Card>
      <CardHeader className="flex-col space-y-0 pb-2">
        <CardTitle className="text-sm">
          {firstUpper(t("tags.region.title"))}
        </CardTitle>
        <CardTitle className="text-muted-foreground text-xs">
          {firstUpper(t("tags.region.subtitle"))}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pt-0">
        {Object.entries(defaultValues.tags.region).map(([name, value]) => (
          <div className="flex flex-1 items-center gap-1" key={name}>
            <FormField
              control={control}
              name={`tags.region.${name}`}
              render={({ field }) => (
                <FormItem className="flex flex-1 justify-between items-center gap-2 space-y-0 capitalize">
                  <FormLabel htmlFor={name} className="text-sm">
                    {/*@ts-ignore */}
                    {t(`tags.region.${name}.name`)}
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value?.value}
                      onCheckedChange={(value) =>
                        field.onChange({
                          ...field.value,
                          value: !field.value.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <NotInput name={`tags.region.${name}`} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export { RegionFilter };
