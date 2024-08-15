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

import { usePokedex } from "@/features/pokemon/hooks/use-pokedex";

import { Pokemon } from "@/data/pokedex";
import { Input } from "@/components/ui/input";
import { useFuzzyFilter } from "@/hooks/use-fuzzy-filter";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";

interface SpeciesDropdownProps {
  label: string;
  pokemon: Pokemon;
  onChange: (pokemon: Pokemon) => void;
  className?: string;
}
export function SpeciesDropdown({
  label,
  pokemon,
  onChange,
  className,
}: SpeciesDropdownProps) {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

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
    <div className={cn("flex flex-col ", className)}>
      <span className="text-muted-foreground text-xs">{label}</span>
      <div className="flex items-center gap-1">
        <TooltipProvider delayDuration={300} disableHoverableContent={false}>
          <Tooltip>
            <TooltipTrigger onClick={() => setOpen(true)} asChild={false}>
              <kbd className="md:inline-flex items-center gap-1 hidden bg-muted opacity-100 px-1.5 border rounded h-8 font-bold font-mono text-base text-muted-foreground pointer-events-none select-none">
                <span className="text-xs">⌘</span>S
              </kbd>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Press <kbd className="bg-muted opacity-100">⌘</kbd> +{" "}
                <kbd className="bg-muted opacity-100">S</kbd> to open the
                species dropdown.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
                  setOpen(false);
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
                          item.name === pokemon.name
                            ? "opacity-100"
                            : "opacity-0"
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
    </div>
  );
}
