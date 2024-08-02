import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { firstUpper } from "@/lib/text";
import { ToggleFilterMode } from "./toggle-filter-mode";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { RangeDescription } from "./components/range-description";
import { EnableRange } from "./components/enable-range";
import { StarIconRange } from "./components/star-icon-range";

const ivs = ["attack", "defense", "hp"];

export function IvRange() {
  const { control, trigger } = useFormContext();
  const t = useTranslations("filters");

  const locale = useLocale();

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 pt-4">
        {ivs.map((name) => (
          <FormField
            key={name}
            control={control}
            name={`ivs.${name}`}
            render={({ field }) => (
              <FormItem className="space-y-2">
                <EnableRange
                  name={name}
                  checked={field.value?.active}
                  onCheckedChange={(active) => {
                    field.onChange({
                      target: {
                        value: { ...field.value, active },
                      },
                    });
                    trigger();
                  }}
                />
                <div
                  className={cn(
                    "flex flex-col items-center  transition",
                    !field.value?.active && "opacity-35"
                  )}
                >
                  <FormControl>
                    <div className="flex items-center gap-1">
                      <ToggleFilterMode
                        value={field.value?.value}
                        disabled={!field.value?.active}
                        mode={field?.value?.mode}
                        onModeChange={(mode) =>
                          field.onChange({
                            target: {
                              value: { ...field.value, mode },
                            },
                          })
                        }
                      />
                      <StarIconRange value={field.value?.value || 0} />
                      <Slider
                        disabled={!field.value?.active}
                        className="flex-1 min-w-32"
                        defaultValue={[field.value?.value || 0]}
                        value={[field.value?.value || 0]}
                        onValueChange={(value) => {
                          field.onChange({
                            target: {
                              value: { ...field.value, value: value[0] },
                            },
                          });
                          trigger();
                        }}
                        max={4}
                        step={1}
                      />
                    </div>
                  </FormControl>
                </div>
                <RangeDescription name={name} />

                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </CardContent>
    </Card>
  );
}
