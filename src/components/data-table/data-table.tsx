import {
  Table as UiTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Table as TableInstance, flexRender } from "@tanstack/react-table";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function DataTable<TData>({
  table,
  cardClassName,
}: {
  table: TableInstance<TData>;
  cardClassName?: string;
}) {
  const pxToPercent = (px: number) => `${px}%`;

  return (
    <Card className={cn("grid bg-popover w-full overflow-auto", cardClassName)}>
      <UiTable className="relative rounded-md">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      width: pxToPercent(cell.column.getSize()),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="font-medium text-center text-lg"
              ></TableCell>
            </TableRow>
          )}
        </TableBody>
      </UiTable>
    </Card>
  );
}

export { DataTable };
