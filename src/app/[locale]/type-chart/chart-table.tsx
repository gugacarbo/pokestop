"use client";

import { PokemonType } from "@/@types/pokemon-types";
import { typesEffectiveness, typesOrder } from "@/@types/type-effectiveness";

import SpeciesTypeIcons from "@/features/pokemon/components/species-type-icons";
import { cn } from "@/lib/utils";
import { ScrollTopTable } from "./scroll-top-table-button";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const highlightedRowClass = "bg-blue-500/80";
const highlightedColumnClass = "bg-red-500/80";
const selectedCellClass = "bg-amber-500/90";

function ChartTable() {
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);
  const [highlightedColumn, setHighlightedColumn] = useState<number | null>(
    null
  );
  const [selectedCell, setSelectedCell] = useState<number[] | undefined>(
    undefined
  );
  const [useHighlight, setUseHighlight] = useState(true);

  const handleMouseEnter = (
    rowIndex: number | null,
    colIndex: number | null
  ) => {
    if (!selectedCell) {
      setHighlightedRow(rowIndex);
      setHighlightedColumn(colIndex);
    }
  };

  const handleMouseLeave = () => {
    if (!selectedCell) {
      setHighlightedRow(null);
      setHighlightedColumn(null);
    }
  };

  const handleClick = (rowIndex: number, colIndex: number) => {
    if (selectedCell) {
      setSelectedCell(undefined);
      setHighlightedRow(null);
      setHighlightedColumn(null);
    } else {
      setHighlightedRow(rowIndex);
      setHighlightedColumn(colIndex);
      setSelectedCell([rowIndex, colIndex]);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="p-2">
        <Label className="flex items-center gap-1">
          <span>Highlight</span>
          <Switch checked={useHighlight} onCheckedChange={setUseHighlight} />
        </Label>
      </div>
      <table className="w-full" id="type-chart">
        <thead>
          <tr className="grid grid-cols-[auto,repeat(18,1fr)]">
            <td className="place-items-center grid p-1">
              <ScrollTopTable />
            </td>
            {typesOrder.map((type, colIndex) => (
              <td
                key={type}
                className={cn(
                  "place-items-center grid p-1 w-full",
                  useHighlight &&
                    highlightedColumn === colIndex &&
                    highlightedColumnClass
                )}
                onMouseEnter={() => handleMouseEnter(null, colIndex)}
                onMouseLeave={handleMouseLeave}
              >
                <SpeciesTypeIcons size="lg" types={[type]} />
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="grid w-full">
          {Object.entries(typesEffectiveness)
            .sort(
              ([a], [b]) =>
                typesOrder.indexOf(a as PokemonType) -
                typesOrder.indexOf(b as PokemonType)
            )
            .map(([type, effectiveness], rowIndex) => (
              <tr
                key={type}
                className={cn(
                  "grid grid-cols-[auto,repeat(18,1fr)]",
                  useHighlight &&
                    highlightedRow === rowIndex &&
                    highlightedRowClass
                )}
                onMouseEnter={() => handleMouseEnter(rowIndex, null)}
                onMouseLeave={handleMouseLeave}
              >
                <td className="place-items-center grid p-1">
                  <SpeciesTypeIcons size="lg" types={[type as PokemonType]} />
                </td>
                {Object.entries(effectiveness)
                  .sort(
                    ([a], [b]) =>
                      typesOrder.indexOf(a as PokemonType) -
                      typesOrder.indexOf(b as PokemonType)
                  )
                  .map(([typ, effect], colIndex) => (
                    <td
                      key={type + typ}
                      className={cn(
                        "items-center grid p-1 w-full h-full",
                        useHighlight && "cursor-pointer",
                        useHighlight &&
                          highlightedColumn === colIndex &&
                          highlightedColumnClass,
                        useHighlight &&
                          selectedCell &&
                          selectedCell[0] === rowIndex &&
                          selectedCell[1] === colIndex &&
                          selectedCellClass
                      )}
                      onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick(rowIndex, colIndex)}
                    >
                      <div
                        className={cn(
                          "bg-muted text-center text-sm font-semibold w-full h-full flex items-center justify-center px-2 py-1.5 rounded-md border-border border shadow",
                          effect === 0.39 && "bg-sky-600",
                          effect === 0.63 && "bg-emerald-600",
                          effect === 1.6 && "bg-red-500"
                        )}
                      >
                        {(effect * 100).toFixed(0)}%
                      </div>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export { ChartTable };
