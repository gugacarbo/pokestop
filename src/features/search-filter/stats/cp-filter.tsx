import React from "react";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { ToggleFilterMode } from "../components/toggle-filter-mode";
import { EnableFilter } from "./iv-filter/components/enable-iv";
import { FilterDescription } from "./iv-filter/components/iv-description";
import { Input } from "@/components/ui/input";
import { AlignHorizontalSpaceAroundIcon } from "lucide-react";

function CpFilter() {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={`stats.cp`}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <EnableFilter
            category={"cp"}
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
                max={null}
                onModeChange={(mode) => {
                  if (mode === "int" && field.value.value.length === 1) {
                    field.onChange({
                      ...field.value,
                      mode,
                      value: [field.value.value[0], field.value.value[0] + 1],
                    });
                  } else if (mode !== "int" && field.value.value.length === 2) {
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
                onChange={(v) =>
                  field.onChange({
                    ...field.value,
                    value: [Number(v.target.value), field.value.value?.[1]],
                  })
                }
              />
              {field.value.value?.[1] && (
                <AlignHorizontalSpaceAroundIcon className="w-4 fill-foreground" />
              )}
              {field.value.value?.[1] && (
                <Input
                  type="number"
                  className="px-0 w-fit max-w-16 text-center"
                  value={field.value.value[1]}
                  disabled={!field.value?.active}
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
          <FilterDescription category={"cp"} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { CpFilter };
