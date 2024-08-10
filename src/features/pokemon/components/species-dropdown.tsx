"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";

import { usePokedex } from "@/hooks/use-pokedex";
import { Pokemon } from "@/data/pokedex";
import { Input } from "@/components/ui/input";
import { useFuzzyFilter } from "@/hooks/use-fuzzy-filter";

interface SpeciesDropdownProps {
  label: string;
  pokemon: Pokemon;
  onChange: (pokemon: Pokemon) => void;
}
export function SpeciesDropdown({
  label,
  pokemon,
  onChange,
}: SpeciesDropdownProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(pokemon.name);

  const pokedex = usePokedex();

  const fuzzy = useFuzzyFilter(pokedex.list, input, {
    keys: ["name"],
    threshold: 0.5,
    delay: 200,
  });

  function handleOnChange(pokemon: Pokemon) {
    onChange(pokemon);
    setInput(pokemon.name);
  }

  return (
    <div className="block w-full">
      <span className="text-gray-400 text-xs">{label}</span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between w-[200px]"
          >
            {pokemon.name ?? "Select Pokémon..."}
            <ChevronsUpDown className="opacity-50 ml-2 w-4 h-4 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Input
            onKeyDown={(event: React.KeyboardEvent) => {
              if (event.key === "Enter" && fuzzy[0]) {
                handleOnChange(fuzzy[0].item);
              }
            }}
            value={input}
            className="rounded-sm outline-none"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search pokemon..."
          />
          <div className="p-1 overflow-hidden">
            <div className="gap-1 grid p-2 max-h-[50vh] overflow-y-auto">
              {(input ? fuzzy.map((i) => i.item) : pokedex.list)
                .slice(0, 100)
                .map((item) => (
                  <Button
                    variant="outline"
                    key={item.name + item.id}
                    onClick={() => {
                      setOpen(false);
                      const p = pokedex.byName(item.name);
                      if (p) {
                        setInput(item.name);
                        handleOnChange(p);
                      }
                    }}
                    className="flex justify-start items-center gap-2 hover:bg-secondary p-2 rounded-sm h-auto text-base cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        item.name === pokemon.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.name}
                  </Button>
                ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
