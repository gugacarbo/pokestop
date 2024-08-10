import { useSearchParams } from "react-router-dom";
import { resetPageIndex } from "./useTablePagination";

function useTableGlobalFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  return [
    searchParams.get("global_search") || "",
    (value: string) => {
      setSearchParams(
        (params) => {
          if (value) {
            params.set("global_search", value);
          } else {
            params.delete("global_search");
          }
          return params;
        },
        { replace: true }
      );
      resetPageIndex(setSearchParams);

      return value;
    },
  ] as const;
}

export default useTableGlobalFilter;
