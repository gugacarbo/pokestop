import React from "react";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { firstUpper } from "@/lib/text";
import { ToggleFilterMode } from "./toggle-filter-mode";
import { EnableFilter } from "./components/enable-iv";
import { StarIconFilter } from "./components/star-icon-iv";
import { FilterDescription } from "./components/iv-description";
import { IvBar } from "@/features/pokemon/components/iv-bar";
import { CpFilter } from "./cp-filter";

const ivs = ["attack", "defense", "hp"];

export function IvFilter() {
  const { control, trigger } = useFormContext();
  const t = useTranslations("filters.stats");

  return (
    <Card>
      <CardHeader className="flex-col space-y-0 pb-2">
        <CardTitle className="text-sm">{firstUpper(t("ivs.title"))}</CardTitle>
        <CardTitle className="text-muted-foreground text-xs">
          {firstUpper(t("ivs.subtitle"))}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {ivs.map((name) => (
          <FormField
            key={name}
            control={control}
            name={`stats.ivs.${name}`}
            render={({ field }) => (
              <FormItem className="space-y-1">
                <EnableFilter
                  name={name}
                  checked={field.value?.active}
                  onCheckedChange={(active) =>
                    field.onChange({ ...field.value, active })
                  }
                />
                <FormControl>
                  <div className="flex items-center gap-1">
                    <ToggleFilterMode
                      value={field.value?.value}
                      disabled={!field.value?.active}
                      mode={field?.value?.mode}
                      onModeChange={(mode) =>
                        field.onChange({ ...field.value, mode })
                      }
                    />
                    <StarIconFilter
                      disabled={!field.value?.active}
                      value={field.value?.value || 0}
                    />
                    <div className="flex flex-col items-center gap-2">
                      <Slider
                        disabled={!field.value?.active}
                        className="flex-1 min-w-32"
                        defaultValue={[field.value?.value || 0]}
                        value={[field.value?.value || 0]}
                        onValueChange={(value) => {
                          field.onChange({ ...field.value, value: value[0] });
                          trigger();
                        }}
                        max={4}
                        step={1}
                      />
                      <IvBar
                        disabled={!field.value?.active}
                        value={field.value.value * 5}
                      />
                    </div>
                  </div>
                </FormControl>
                <FilterDescription name={name} />
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <CpFilter />
      </CardContent>
    </Card>
  );
}
