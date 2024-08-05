import { useMessages } from "next-intl";
import { applyNot } from ".";
import { SearchFilter } from "../../schemas/search-filter-schema";

function useBuddyStrParser({ stats: { buddy } }: SearchFilter) {
  const { filters } = useMessages() as unknown as IntlMessages;

  return buddy.active
    ? applyNot(
        `${filters?.stats.buddy.value}${buddy.mode === "lt" ? "-" : ""}${
          buddy.value[0]
        }${
          buddy.mode === "gt" || buddy.mode === "int" ? "-" : ""
          // @ts-ignore
        }${buddy.value?.[1] ? buddy.value[1] : ""}`,
        buddy.not
      )
    : "";
}

export { useBuddyStrParser };
