import {
  Table as UiTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Row, Table as TableInstance, flexRender } from "@tanstack/react-table";
import type { Table as TableType } from "@tanstack/react-table";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getCommonPinningStyles } from "../column-pinning-styles";
const pxToPercent = (px: number) => `${px}%`;

function DataTable<TData>({
  table,
  cardClassName,
  hideHeader,
  short,
  tableClassName,
}: {
  table: TableInstance<TData>;
  cardClassName?: string;
  hideHeader?: boolean;
  short?: boolean;
  tableClassName?: string;
}) {
  return (
    <Card className={cn("grid bg-popover w-full overflow-auto", cardClassName)}>
      <UiTable className={cn("relative rounded-md", tableClassName)}>
        <TableHeader className={hideHeader ? "hidden" : ""}>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={{ ...getCommonPinningStyles(header.column) }}
                    className={cn(
                      "",
                      short && "h-8",
                      header.column.getSize() === 0 && "px-0",
                      header.column.getSize() === 1 && "px-1",
                      header.column.getSize() === 2 && "px-2"
                    )}
                  >
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
          {table?.getTopRows()?.map((row) => (
            <PinnedRow short={short} key={row.id} row={row} table={table} />
          ))}
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
                      ...getCommonPinningStyles(cell.column),
                    }}
                    className={cn(
                      "",
                      short && "p-2",
                      cell.column.getSize() === 0 && "px-0",
                      cell.column.getSize() === 1 && "px-1",
                      cell.column.getSize() === 2 && "px-2"
                    )}
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

function PinnedRow<T>({
  row,
  table,
  short,
}: {
  row: Row<T>;
  table: TableType<T>;
  short?: boolean;
}) {
  return (
    <TableRow
      style={{
        top:
          row.getIsPinned() === "top"
            ? `${row.getPinnedIndex() * 26}px`
            : undefined,
        bottom:
          row.getIsPinned() === "bottom"
            ? `${
                (table.getBottomRows().length - 1 - row.getPinnedIndex()) * 26
              }px`
            : undefined,
      }}
      className="sticky"
    >
      {row.getVisibleCells().map((cell) => {
        return (
          <TableCell
            key={cell.id}
            style={{
              width: pxToPercent(cell.column.getSize()),
            }}
            className={cn(
              "bg-secondary",
              short && "p-2",
              cell.column.getSize() === 0 && "px-0",
              cell.column.getSize() === 1 && "px-1",
              cell.column.getSize() === 2 && "px-2"
            )}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
