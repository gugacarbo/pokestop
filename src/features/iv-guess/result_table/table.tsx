import { RankedSpread } from "@/lib/generateRankedSpreads";
import { getCoreRowModel } from "@tanstack/react-table";
import { rankSpreadColumns } from "../../data-table/data-columns/rank-spread-columns";
import { DataTable } from "@/features/data-table/components/data-table";
import { TablePageSizeSelect } from "@/features/data-table/components/table-page-size-select";
import { ToggleVisibleColumns } from "@/features/data-table/components/toggle-visible-columns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDataTable } from "@/features/data-table/useDataTable";

function ResultTable({ matchingSpreads }: { matchingSpreads: RankedSpread[] }) {
  const table = useDataTable({
    data: matchingSpreads,
    columns: rankSpreadColumns,
    getCoreRowModel: getCoreRowModel(),
    initialSorting: "rank",
    initialVisibility: {
      level: false,
      product_percentOfMax: false,
    },
  });

  return (
    <Card className="col-span-1 md:col-span-3 2xl:col-span-2 w-full">
      <CardHeader className="flex flex-row items-center space-y-0">
        <CardTitle>
          Possible Spreads: {matchingSpreads.length} <small>of 4096</small>
        </CardTitle>
        <ToggleVisibleColumns table={table} />
      </CardHeader>
      <DataTable cardClassName="rounded-none border-none " table={table} />
      <CardFooter className="pt-4">
        <TablePageSizeSelect className="mt" table={table} />
      </CardFooter>
    </Card>
  );
}

export { ResultTable };
