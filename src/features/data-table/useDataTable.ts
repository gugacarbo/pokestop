import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  VisibilityState,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  FilterFn,
  TableOptions,
} from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";
import { useDataOptions } from "./useDataOptions";

interface useDataTableProps<TData, TValue>
  extends Partial<TableOptions<TData>> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  initialVisibility?: Record<string, boolean>;
  initialSorting?: SortingState[0]["id"];
}

function useDataTable<TData, TValue>({
  columns,
  data,
  state,
  initialState,
  filterFns,
  sortingFns,
  initialVisibility = {},
  initialSorting,
  ...props
}: useDataTableProps<TData, TValue>) {
  const {
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    globalFilter,
    setGlobalFilter,
    columnVisibility,
    setColumnVisibility,
  } = useDataOptions({
    initialSorting,
    initialVisibility,
  });

  const fuzzyFilter: FilterFn<TData> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value, {
      threshold: 2,
    });

    addMeta({
      itemRank,
    });

    return itemRank.passed;
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    sortingFns: {
      text: (rowA, rowB, columnId) => {
        return rowA?.original?.[columnId]?.localeCompare(
          rowB?.original?.[columnId]
        );
      },
      ...sortingFns,
    },
    onGlobalFilterChange: setGlobalFilter,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    // onRowSelectionChange: setRowSelection,
    filterFns: {
      fuzzy: fuzzyFilter,
      ...filterFns,
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
      // rowSelection,
      ...state,
    },
    initialState: {
      ...initialState,
      // rowSelection: {},
      // expanded: true,
    },
    defaultColumn: {
      size: 10, //starting column size
      minSize: 0, //enforced during column resizing
      maxSize: 40, //enforced during column resizing
      ...props.defaultColumn,
    },

    ...props,
  });

  return table;
}

export { useDataTable };
