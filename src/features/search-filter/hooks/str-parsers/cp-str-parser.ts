import { useMessages } from "next-intl";
import { applyNot } from ".";
import { SearchFilter } from "../../schemas/search-filter-schema";

function useCpStrParser({ stats: { cp } }: SearchFilter) {
  const { filters } = useMessages() as IntlMessages;

  return cp.active
    ? applyNot(
        `${filters?.stats.cp.value}${cp.mode === "lt" ? "-" : ""}${
          cp.value[0]
        }${
          cp.mode === "gt" || cp.mode === "int" ? "-" : ""
          // @ts-ignore
        }${cp.value?.[1] ? cp.value[1] : ""}`,
        cp.not
      )
    : "";
}

export { useCpStrParser };
