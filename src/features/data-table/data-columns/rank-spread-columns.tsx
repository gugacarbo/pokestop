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
import { RankHeader } from "../components/headers/rank-header";
import { PercentOfFirstHeader } from "../components/headers/percent-of-first-header";
import { StatHeader } from "../components/headers/stat-header";

export const rankSpreadColumns: ColumnDef<RankedSpread>[] = [
  {
    accessorKey: "rank",
    header: RankHeader,
    cell: RankCell,
    size: 2,
  },
  {
    accessorKey: "stats.atk.value",
    id: "stats_atk",

    header: StatHeader,
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>().toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "stats.def.value",
    id: "stats_def",

    header: StatHeader,
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>().toFixed(2)}</div>
    ),
  },
  {
    accessorKey: "stats.sta.value",
    id: "stats_sta",
    header: StatHeader,
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

    header: PercentOfFirstHeader,
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
