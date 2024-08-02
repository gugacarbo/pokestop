import { useMessages } from "next-intl";
import { SearchFilter } from "../search-filter-schema";

function ivsStrParser({ ivs }: SearchFilter) {
  const { filters } = useMessages() as IntlMessages;

  return Object.entries(ivs)
    .filter(([_, value]) => value.active)
    .map(([key, value]) => {
      return `${value.mode === "lt" ? "-" : ""}${value.value}${
        value.mode === "gt" ? "-" : ""
      }${filters?.ivs[key as keyof SearchFilter["ivs"]].value}`;
    })
    .join("&");
}

export { ivsStrParser };
