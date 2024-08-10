import { PaginationState } from "@tanstack/react-table";
import { useMemo } from "react";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";

function useTablePagination({
  initialPageIndex = 0,
  initialPageSize = 5,
}: {
  initialPageIndex?: number;
  initialPageSize?: number;
} = {}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchIndex = searchParams.get("pageIndex");
  const searchSize = searchParams.get("pageSize");

  const currentParams = useMemo(
    () => ({
      pageIndex: Number(
        searchIndex != null ? Number(searchIndex) - 1 : initialPageIndex
      ),
      pageSize: Number(searchSize) || initialPageSize,
    }),
    [initialPageIndex, initialPageSize, searchIndex, searchSize]
  );

  function setPagination(
    updaterOrValue:
      | PaginationState
      | ((state: PaginationState) => PaginationState)
  ) {
    let newValues;

    if (updaterOrValue instanceof Function) {
      newValues = updaterOrValue(currentParams);
    } else {
      newValues = { ...currentParams, ...updaterOrValue };
    }

    setSearchParams(
      (params) => {
        const newPageIndex = newValues.pageIndex + 1;
        const newPageSize = newValues.pageSize;

        if (params.get("pageIndex") !== String(newPageIndex)) {
          params.set("pageIndex", String(newPageIndex));
        }

        if (params.get("pageSize") !== String(newPageSize)) {
          params.set("pageSize", String(newPageSize));
        }
        return params;
      },
      { replace: true }
    );
  }

  return [currentParams, setPagination] as const;
}

export default useTablePagination;

export function resetPageIndex(setParams: SetURLSearchParams) {
  setParams((params) => {
    params.set("pageIndex", "1");
    return params;
  });
}
