"use client";

import { useFormContext } from "react-hook-form";
import { FormField, FormItem } from "@/components/ui/form";
import { SearchFilter } from "../schemas/search-filter-schema";
import { NotButton } from "../components/NotButton";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DnaIcon } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function NamesList() {
  const { control } = useFormContext<SearchFilter>();

  const t = useTranslations();

  return (
    <FormField
      control={control}
      name="text.pokemon_name"
      render={({ field }) => (
        <FormItem className="flex-1 w-full max-h-72 overflow-x-visible overflow-y-auto">
          {field.value.map(({ value, not }, index) => (
            <div className="flex items-center gap-2 mb-2 w-full" key={value}>
              <NotButton
                onClick={() => {
                  const newValues = [...field.value];
                  newValues[index].not = !not;
                  field.onChange(newValues);
                }}
                value={not}
              />
              <span className="text-sm">
                {
                  // @ts-ignore
                  t(`pokemons.dex.${value}.name`)
                }
              </span>
              <ToggleFamily
                active={field.value[index].withFamily}
                onClick={() => {
                  const newValues = [...field.value];
                  newValues[index].withFamily = !newValues[index].withFamily;
                  field.onChange(newValues);
                }}
              />
            </div>
          ))}
        </FormItem>
      )}
    />
  );
}

export { NamesList };

function ToggleFamily({
  onClick,
  disabled,
  active,
}: {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}) {
  const t = useTranslations();

  return (
    <TooltipProvider delayDuration={300} disableHoverableContent={false}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          <Button
            size="xs"
            className="mr-1 ml-auto"
            variant="outline"
            disabled={disabled}
            onClick={onClick}
          >
            <DnaIcon
              className={cn(
                "text-muted-foreground hover:text-emerald-400 transition duration-200 size-4",
                active && "text-emerald-600"
              )}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("filters.text.pokemon_name.withFamily")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
