import SortButton from "@/components/data-table/sort-button";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { ColumnDef } from "@tanstack/react-table";
import { TrophyIcon } from "lucide-react";
/**
 * 
 *      {matchingSpreads.map((spread) => (
            <tr key={`${spread.ivs.atk}-${spread.ivs.def}-${spread.ivs.sta}`}>
              <td>{spread.rank}</td>
              <td>
                {spread.level >= 50.5 && (
                  <CheckIcon aria-label="Yes" className="w-4 h-4" />
                )}
              </td>
              <td>
                {spread.ivs.atk}-{spread.ivs.def}-{spread.ivs.sta}
              </td>
              <td>{spread.stats.atk.value.toFixed(2)}</td>
              <td>{spread.stats.def.value.toFixed(2)}</td>
              <td>{spread.cp}</td>
            </tr>
          ))}
 */
export const ivGuessResultColumns: ColumnDef<RankedSpread>[] = [
  {
    accessorKey: "rank",
    header: ({ column }) =>
      SortButton({
        label: <TrophyIcon className="size-5" />,
        position: "left",
        column,
      }),
    size: 0,
    cell: (cell) => (
      <div className="text-center">{cell.getValue<number>()}</div>
    ),
  },
  {
    accessorKey: "ivs",
    header: ({ column }) =>
      SortButton({
        label: "IVs",
        position: "center",
        column,
      }),
    cell: (cell) => {
      const ivs = cell.getValue<RankedSpread["ivs"]>();
      return (
        <div className="flex justify-center items-center text-center">
          <span>{ivs.atk}-</span>
          <span>{ivs.def}-</span>
          <span>{ivs.sta}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "stats.atk.value",
    header: ({ column }) =>
      SortButton({
        label: "Atk",
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
        label: "Def",
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
        label: "Sta",
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
        label: "CP",
        position: "center",
        column,
      }),
  },
];
