import { ColumnSort } from "@tanstack/react-table";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

function useTableSorting(startId = "created_at", startDesc = true) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentParams = useMemo(
    () => [
      {
        id: searchParams.get("id") || startId,
        desc: searchParams.get("desc")
          ? searchParams.get("desc") === "true"
          : startDesc,
      },
    ],
    // eslint-disable-next-line
    [searchParams.get("id"), searchParams.get("desc")]
  );

  function setPagination(
    updaterOrValue: ColumnSort[] | ((state: ColumnSort[]) => ColumnSort[])
  ) {
    let newValues: ColumnSort[];

    if (updaterOrValue instanceof Function) {
      newValues = updaterOrValue(currentParams);
    } else {
      newValues = updaterOrValue;
    }

    setSearchParams(
      (params) => {
        const id = newValues[0].id;
        const newPageSize = newValues[0].desc;

        if (params.get("id") !== id) {
          params.set("id", id);
        }

        if (params.get("desc") !== String(newPageSize)) {
          params.set("desc", String(newPageSize));
        }

        return params;
      },
      { replace: true }
    );
  }

  return [currentParams, setPagination] as const;
}

export default useTableSorting;
