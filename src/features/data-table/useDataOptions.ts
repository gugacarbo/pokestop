"use client";

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

function useDataOptions({
  initialVisibility = {},
  initialSorting,
}: {
  initialVisibility?: Record<string, boolean>;
  initialSorting?: SortingState[0]["id"];
}) {
  const [sorting, setSorting] = useState<SortingState>(
    initialSorting
      ? [
          {
            id: initialSorting,
            desc: false,
          },
        ]
      : []
  );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>(initialVisibility);
  return {
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    globalFilter,
    setGlobalFilter,
    columnVisibility,
    setColumnVisibility,
  };
}

export { useDataOptions };
