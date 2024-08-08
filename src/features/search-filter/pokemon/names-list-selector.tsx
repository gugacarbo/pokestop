"use client";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import { Pokemon } from "@/features/pokemon/@types";
import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { SearchFilter } from "../schemas/search-filter-schema";
import { useTranslations } from "next-intl";

function NamesListSelector({
  pokemons,
}: {
  pokemons: Pick<Pokemon, "speciesName" | "dex" | "speciesId">[];
}) {
  const { control } = useFormContext<SearchFilter>();
  const t = useTranslations("filters.text.pokemon_name");

  return (
    <FormField
      control={control}
      name="text.pokemon_name"
      render={({ field }) => (
        <Popover>
          <div className="flex items-center gap-1">
            <Button
              size="xs"
              variant="outline"
              disabled={field.value.length === 0}
              onClick={() => field.onChange([])}
            >
              <Trash2Icon className="text-destructive size-4" />
            </Button>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="flex flex-1 justify-between items-center text-sm overflow-hidden"
                type="button"
              >
                <span className="text-xs truncate">
                  {field.value.length > 0
                    ? `${field.value.length} ${t("selected")}`
                    : t("select-label")}
                </span>
                <ChevronsUpDown className="opacity-50 ml-2 w-4 h-4 shrink-0" />
              </Button>
            </PopoverTrigger>
          </div>
          <PopoverContent className="p-0 w-full">
            <Command>
              <CommandInput placeholder={t("search-label")} />
              <CommandList>
                <CommandEmpty>No pokemon found.</CommandEmpty>
                <CommandGroup>
                  {pokemons.map((pokemon) => (
                    <CommandItem
                      onSelect={() => {
                        if (
                          field.value.find(
                            (val) => val.value === String(pokemon.dex)
                          )
                        ) {
                          field.onChange(
                            field.value.filter(
                              (val) => val.value !== String(pokemon.dex)
                            )
                          );
                        } else {
                          field.onChange([
                            ...field.value,
                            { value: String(pokemon.dex), not: false },
                          ]);
                        }
                      }}
                      key={pokemon.dex}
                      value={String(pokemon.speciesName)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          field.value.find(
                            (val) => val.value === String(pokemon.dex)
                          )
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {pokemon.speciesName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  );
}

export { NamesListSelector };
