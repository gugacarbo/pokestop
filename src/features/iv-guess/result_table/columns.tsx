import SortButton from "@/components/data-table/sort-button";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { CrossIcon, PercentIcon, ShieldIcon, SwordsIcon, TrophyIcon } from "lucide-react";
import { RankCell } from "./rank-cell";

export const ivGuessResultColumns: ColumnDef<RankedSpread>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <TrophyIcon
            className={cn(sorted ? "text-amber-500  shadow-white" : "")}
          />
        ),
        position: "left",
        column,
      }),
    cell: RankCell,
    size: 0,
  },
  {
    accessorKey: "stats.atk.value",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <SwordsIcon
            className={cn(sorted ? "text-orange-600 fill-orange-600" : "")}
          />
        ),
        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>().toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "stats.def.value",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <ShieldIcon
            className={cn(
              sorted ? "text-sky-600/80 fill-blue-600 shadow-white" : ""
            )}
          />
        ),

        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>().toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "stats.sta.value",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <CrossIcon
            className={cn(sorted ? "text-red-600 fill-red-600" : "")}
          />
        ),
        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>().toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "cp",
    header: ({ column }) =>
      SortButton({
        label: <span className="font-semibold text-lg">CP</span>,
        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>()}</div>
    ),
  },
  {
    accessorKey: "level",
    header: ({ column }) =>
      SortButton({
        label: <span className="font-bold text-base">LVL</span>,
        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>()}</div>
    ),
  },
  {
    accessorKey: "product.percentOfMax",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <PercentIcon
          strokeWidth={2}
            className={cn("size-5",sorted ? "text-blue-600 fill-blue-600" : "")}
          />
        ),
        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">
        {(cell.getValue<number>() * 100).toFixed(2)}%
      </div>
    ),
  },
];
