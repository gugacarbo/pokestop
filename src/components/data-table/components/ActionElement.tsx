import { CellContext, ColumnDef } from "@tanstack/react-table";
import React from "react";

export const ActionElement = <T,>(
  children: (props: { row: T }) => React.ReactNode,
  props?: Partial<ColumnDef<T>>
): ColumnDef<T> => ({
  id: "action",
  size: 1,
  cell: ({ row }: CellContext<T, unknown>) => {
    return children({ row: row.original });
  },
  enableSorting: false,
  enableHiding: false,
  ...props,
});
