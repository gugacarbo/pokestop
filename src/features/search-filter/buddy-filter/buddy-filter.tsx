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
import { Card, CardContent } from "@/components/ui/card";

const buddyLabel: Record<string, string> = {
  0: "0% - 48.9%",
  1: "51.1% - 64.4%",
  2: "66.7% - 80.0%",
  3: "82.2% - 97.8%",
  4: "100%",
};

export function BuddyFilter() {
  const { control } = useFormContext();

  return (
    <Card>
      <CardContent className="flex flex-col gap-1 pt-4">
        {Object.entries(buddyLabel).map(([value, label]) => (
          <FormField
            control={control}
            name={`buddy.${value}`}
            key={value}
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
                            field.value
                              ? "border-primary "
                              : "opacity-55 hover:opacity-80"
                          )}
                          onClick={() => {
                            field.onChange({
                              target: {
                                value: !field.value,
                              },
                            });
                          }}
                        >
                          {Array.from({ length: Number(value) }, (_, i) => (
                            <Star
                              key={`${i}-a`}
                              className="text-yellow-500 size-5"
                            />
                          ))}
                          {Array.from({ length: 4 - Number(value) }, (_, i) => (
                            <Star key={`${i}-b`} className="size-5" />
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
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </CardContent>
    </Card>
  );
}
