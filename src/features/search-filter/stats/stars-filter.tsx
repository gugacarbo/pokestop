import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "next-intl";
import { NotButton } from "../components/NotButton";
import { FilterCard } from "../filter-card";

const starsLabel: Record<string, string> = {
  0: "0% - 48.9%",
  1: "51.1% - 64.4%",
  2: "66.7% - 80.0%",
  3: "82.2% - 97.8%",
  4: "100%",
};

export function StarsFilter() {
  const { control } = useFormContext();
  const t = useTranslations("filters.stats.stars");

  return (
    <FilterCard filterKey="stats.stars">
      {Object.entries(starsLabel).map(([value, label]) => (
        <FormField
          key={`${value}.not`}
          control={control}
          name={`stats.stars.${value}`}
          render={({ field }) => (
            <FormItem className="space-y-1">
              <div className="flex items-center gap-2">
                <NotButton
                  aria-label={label}
                  value={field.value.not}
                  disabled={!field.value.value}
                  onClick={() => {
                    field.onChange({
                      ...field.value,
                      not: !field.value.not,
                    });
                  }}
                />
                <FormControl>
                  <TooltipProvider
                    delayDuration={300}
                    key={value}
                    disableHoverableContent
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          aria-label={label}
                          variant="outline"
                          className={cn(
                            "flex items-center",
                            field.value?.value
                              ? "border-primary "
                              : "opacity-55 hover:opacity-80"
                          )}
                          onClick={() => {
                            field.onChange({
                              ...field.value,
                              value: !field.value?.value,
                            });
                          }}
                        >
                          {Array.from({ length: Number(value) }, (_, i) => (
                            <Star
                              key={`${i}-a`}
                              className={cn(
                                "transition text-yellow-500 size-5",
                                field.value?.value ? "" : "opacity-35"
                              )}
                            />
                          ))}
                          {Array.from({ length: 4 - Number(value) }, (_, i) => (
                            <Star
                              key={`${i}-b`}
                              className={cn(
                                "transition size-5",
                                field.value?.value ? "" : "opacity-35"
                              )}
                            />
                          ))}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <small className="font-semibold text-sm">
                          IV {label}
                        </small>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </FilterCard>
  );
}
