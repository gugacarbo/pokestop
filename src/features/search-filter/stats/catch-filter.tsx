"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { ToggleFilterMode } from "../components/toggle-filter-mode";
import { EnableFilter } from "../components/enable-filter";
import { FilterDescription } from "./iv-filter/components/iv-description";
import { Input } from "@/components/ui/input";
import { AlignHorizontalSpaceAroundIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FilterCard } from "../filter-card";

function CatchFilter() {
  const { control } = useFormContext();

  const t = useTranslations("filters.stats.catch.distance");

  return (
    <FilterCard filterKey="stats.catch">
      <FormField
        control={control}
        name={`stats.catch.distance`}
        render={({ field }) => (
          <FormItem className="space-y-2">
            <EnableFilter
              category={"catch.distance"}
              checked={field.value?.active}
              onCheckedChange={(active) =>
                field.onChange({ ...field.value, active })
              }
            />
            <FormControl>
              <div className="flex flex-1 items-center gap-2">
                <ToggleFilterMode
                  value={field.value?.value}
                  disabled={!field.value?.active}
                  mode={field?.value?.mode}
                  max={5}
                  onModeChange={(mode) => {
                    if (mode === "int" && field.value.value.length === 1) {
                      field.onChange({
                        ...field.value,
                        mode,
                        value: [field.value.value[0], field.value.value[0] + 1],
                      });
                    } else if (
                      mode !== "int" &&
                      field.value.value.length === 2
                    ) {
                      field.onChange({
                        ...field.value,
                        mode,
                        value: [field.value.value[0]],
                      });
                    } else {
                      field.onChange({ ...field.value, mode });
                    }
                  }}
                  allowInterval={true}
                />
                <Input
                  type="number"
                  className="px-0 w-fit max-w-16 text-center"
                  value={field.value.value[0]}
                  disabled={!field.value?.active}
                  max={5}
                  min={0}
                  onChange={(v) =>
                    field.onChange({
                      ...field.value,
                      value: [Number(v.target.value), field.value.value?.[1]],
                    })
                  }
                />
                {field.value.value?.[1] >= 0 && (
                  <AlignHorizontalSpaceAroundIcon className="w-4 fill-foreground" />
                )}
                {field.value.value?.[1] >= 0 && (
                  <Input
                    type="number"
                    className="px-0 w-fit max-w-16 text-center"
                    value={field.value.value[1]}
                    disabled={!field.value?.active}
                    max={5}
                    min={0}
                    onChange={(v) =>
                      field.onChange({
                        ...field.value,
                        value: [field.value.value[0], Number(v.target.value)],
                      })
                    }
                  />
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FilterCard>
  );
}

export { CatchFilter };
