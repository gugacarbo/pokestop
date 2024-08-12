import SortButton from "@/features/data-table/components/cells/sort-button";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  CrossIcon,
  PercentIcon,
  ShieldIcon,
  SwordsIcon,
  TrophyIcon,
} from "lucide-react";
import { RankCell } from "../components/cells/rank-cell";
import { xlCount } from "@/lib/xlCount";
import { formatValue } from "@/utils/formatValue";

export const rankSpreadColumns: ColumnDef<RankedSpread>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <TrophyIcon
            className={cn(
              "size-5",
              sorted ? "text-amber-500  shadow-white" : ""
            )}
          />
        ),
        position: "left",
        column,
      }),
    cell: RankCell,
    size: 2,
  },
  {
    accessorKey: "stats.atk.value",
    id: "stats_atk",

    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <SwordsIcon
            className={cn(
              "size-5",
              sorted ? "text-orange-600 fill-orange-600" : ""
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
    accessorKey: "stats.def.value",
    id: "stats_def",

    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <ShieldIcon
            className={cn(
              "size-5",
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
    id: "stats_sta",
    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <CrossIcon
            className={cn("size-5", sorted ? "text-red-600 fill-red-600" : "")}
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
        label: <span className="font-semibold text-base">CP</span>,
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
        label: <span className="font-bold text-sm">LVL</span>,
        position: "center",
        column,
      }),
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>()}</div>
    ),
  },
  {
    accessorKey: "product.percentOfMax",
    id: "percentOfMax",
    invertSorting: true,

    header: ({ column }) =>
      SortButton({
        label: (sorted) => (
          <div className="flex items-end gap-0.5">
            <span className="flex items-start leading-none">
              <b className="text-base leading-none">1</b>
              <b className="text-xs leading-none">st</b>
            </span>
            <PercentIcon strokeWidth={2} className={cn("size-4")} />
          </div>
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
  {
    accessorKey: "level",
    invertSorting: true,
    id: "xlCandy",
    header: ({ column }) =>
      SortButton({
        label: <span className="font-semibold text-sm">XL</span>,

        position: "center",
        column,
      }),

    cell: (cell) => (
      <div className="text-center">{xlCount(cell.getValue<number>())}</div>
    ),
  },
  {
    accessorKey: "product.value",
    id: "statProduct",
    header: ({ column }) =>
      SortButton({
        label: <span className="font-medium text-sm">Stat Prod.</span>,

        position: "center",
        column,
      }),

    cell: (cell) => (
      <div className="text-center">
        {formatValue(cell.getValue<number>(), 2)}
      </div>
    ),
  },
  {
    accessorKey: "bulkProduct.value",
    id: "bulkProduct",
    header: ({ column }) =>
      SortButton({
        label: <span className="font-semibold text-sm">Bulk Prod.</span>,
        position: "center",
        column,
      }),

    cell: (cell) => (
      <div className="text-center">
        {formatValue(cell.getValue<number>(), 2)}
      </div>
    ),
  },
];
