import { RankedSpread } from "@/lib/generateRankedSpreads";
import { getCoreRowModel } from "@tanstack/react-table";
import { ivGuessResultColumns } from "./columns";
import { DataTable } from "@/components/data-table/data-table";
import useDataTable from "@/components/data-table/hooks/useDataTable";
import { TablePageSizeSelect } from "@/components/data-table/table-page-size-select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ResultTable({ matchingSpreads }: { matchingSpreads: RankedSpread[] }) {
  const table = useDataTable({
    data: matchingSpreads,
    columns: ivGuessResultColumns,
    getCoreRowModel: getCoreRowModel(),
    initialSorting: "rank",
  });

  return (
    <Card className="col-span-1 md:col-span-3 2xl:col-span-2 w-full">
      <CardHeader>
        <CardTitle>
          Possible Spreads: {matchingSpreads.length} <small>of 4096</small>
        </CardTitle>
      </CardHeader>
      <DataTable cardClassName="rounded-none border-none " table={table} />
      <CardFooter className="pt-4">
        <TablePageSizeSelect className="mt" table={table} />
      </CardFooter>
    </Card>
  );
}

export { ResultTable };
