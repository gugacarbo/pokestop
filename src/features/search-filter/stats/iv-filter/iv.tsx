import React from "react";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import { Slider } from "@/components/ui/slider";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { ToggleFilterMode } from "../../components/toggle-filter-mode";
import { EnableFilter } from "../../components/enable-filter";
import { StarIconFilter } from "./components/star-icon-iv";
import { FilterDescription } from "./components/iv-description";
import { IvBar } from "@/features/pokemon/components/iv-bar";
import { CpFilter } from "../cp-filter";
import { FilterCard } from "../../filter-card";

const ivs = ["attack", "defense", "hp"];

export function IvFilter() {
  const { control, trigger } = useFormContext();
  const t = useTranslations("filters.stats");

  return (
    <FilterCard filterKey={`stats.ivs`}>
      <CpFilter />
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
                <div className="flex flex-1 items-center gap-1">
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
                  <div className="flex flex-col flex-1 items-center gap-2">
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
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </FilterCard>
  );
}
