import { ColumnFiltersState } from "@tanstack/react-table";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { resetPageIndex } from "./useTablePagination";

function useTableColumnsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchIndices = searchParams.getAll("col_filter_id");
  const searchValues = searchParams.getAll("col_filter_value");

  const currentParams = useMemo(() => {
    const curr = searchIndices.map((id, index) => ({
      id: id ?? "",
      value: searchValues[index] ?? "",
    }));
    return curr.filter((param) => param.id) as unknown as ColumnFiltersState;
  }, [searchIndices, searchValues]);

  function setColumnFilter(
    updaterOrValue:
      | ColumnFiltersState
      | ((state: ColumnFiltersState) => ColumnFiltersState)
  ) {
    let newValues;

    if (updaterOrValue instanceof Function) {
      newValues = updaterOrValue(currentParams);
    } else {
      newValues = [...currentParams, ...updaterOrValue];
    }

    setSearchParams((params) => {
      params.delete("col_filter_id");
      params.delete("col_filter_value");

      newValues.forEach(({ id, value }) => {
        if (id) {
          params.append("col_filter_id", String(id));
        }
        if (value) {
          params.append("col_filter_value", String(value));
        }
      });

      return params;
    });
    resetPageIndex(setSearchParams);
  }

  return [currentParams, setColumnFilter] as const;
}

export default useTableColumnsFilter;
