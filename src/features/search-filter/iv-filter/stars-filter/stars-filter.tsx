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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { firstUpper } from "@/lib/text";
import { NotButton } from "../../components/NotButton";

const starsLabel: Record<string, string> = {
  0: "0% - 48.9%",
  1: "51.1% - 64.4%",
  2: "66.7% - 80.0%",
  3: "82.2% - 97.8%",
  4: "100%",
};

export function StarsFilter() {
  const { control } = useFormContext();
  const t = useTranslations("filters.stars");

  return (
    <Card>
      <CardHeader className="flex-col space-y-0">
        <CardTitle className="text-sm">{firstUpper(t("title"))}</CardTitle>
        <CardTitle className="text-muted-foreground text-xs">
          {firstUpper(t("subtitle"))}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {Object.entries(starsLabel).map(([value, label]) => (
          <div className="flex items-center gap-1" key={`${value}.not`}>
            <FormField
              control={control}
              name={`stars.${value}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <NotButton
                      aria-label={label}
                      value={field.value.not}
                      disabled={!field.value.value}
                      onClick={() => {
                        field.onChange({
                          target: {
                            value: {
                              ...field.value,
                              not: !field.value.not,
                            },
                          },
                        });
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={`stars.${value}`}
              render={({ field }) => (
                <FormItem>
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
                              field.value.value
                                ? "border-primary "
                                : "opacity-55 hover:opacity-80"
                            )}
                            onClick={() => {
                              field.onChange({
                                target: {
                                  value: {
                                    ...field.value,
                                    value: !field.value.value,
                                  },
                                },
                              });
                            }}
                          >
                            {Array.from({ length: Number(value) }, (_, i) => (
                              <Star
                                key={`${i}-a`}
                                className={cn(
                                  "transition text-yellow-500 size-5",
                                  field.value.value ? "" : "opacity-35"
                                )}
                              />
                            ))}
                            {Array.from(
                              { length: 4 - Number(value) },
                              (_, i) => (
                                <Star
                                  key={`${i}-b`}
                                  className={cn(
                                    "transition size-5",
                                    field.value.value ? "" : "opacity-35"
                                  )}
                                />
                              )
                            )}
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
