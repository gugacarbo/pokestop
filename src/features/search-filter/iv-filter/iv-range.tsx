import React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Equal } from "lucide-react";
import { useFormContext } from "react-hook-form";

import LessThan from "@/assets/less-than-equal.svg";
import GreaterThan from "@/assets/greater-than-equal.svg";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { IvFilterMode } from "../search-filter-schema";
import { useTranslations } from "next-intl";
import { Switch } from "@/components/ui/switch";

const ivs = ["attack", "defense", "hp"];

export function IvRange() {
  const { control, trigger } = useFormContext();
  const t = useTranslations("filters");

  return (
    <div className="flex flex-col gap-4">
      {ivs.map((name) => (
        <FormField
          key={name}
          control={control}
          name={`ivs.${name}`}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <Switch
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
                <FormLabel className="capitalize">
                  {/*@ts-ignore */}
                {t(`ivs.${name}`)}
                </FormLabel>
              </div>
              <FormControl>
                <div className="flex items-center gap-1">
                  <ToggleFilterMode
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
                  <span className="w-3">{field.value?.value}</span>
                  <Slider
                    disabled={!field.value?.active}
                    className="flex-1 min-w-24"
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
              <FormDescription>
                {/*@ts-ignore */}
                {t("filter-by")} {t(`ivs.${name}`)} IV.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}

function ToggleFilterMode({
  mode,
  onModeChange,
  disabled,
}: {
  mode: IvFilterMode;
  onModeChange: (mode: IvFilterMode) => void;
  disabled?: boolean;
}) {
  const icon = (mode: IvFilterMode) => {
    switch (mode) {
      case "eq":
        return <Equal className="size-5" />;
      case "gt":
        return <GreaterThan className="fill-foreground size-3" />;
      case "lt":
        return <LessThan className="fill-foreground size-3" />;
      default:
        return null;
    }
  };

  return (
    <Button
      variant="outline"
      disabled={disabled}
      size="icon"
      onClick={() => {
        switch (mode) {
          case "eq":
            onModeChange("gt");
            break;
          case "gt":
            onModeChange("lt");
            break;
          case "lt":
            onModeChange("eq");
            break;
        }
      }}
    >
      {icon(mode)}
    </Button>
  );
}
