import { useMessages } from "next-intl";
import { SearchFilter } from "../search-filter-schema";
import { applyNot } from ".";

function ivsStrParser({ ivs }: SearchFilter) {
  const { filters } = useMessages() as IntlMessages;

  return Object.entries(ivs)
    .filter(([_, value]) => value.active)
    .map(([key, value]) => {
      return applyNot(
        `${value.mode === "lt" ? "-" : ""}${value.value}${
          value.mode === "gt" ? "-" : ""
        }${filters?.ivs[key as keyof SearchFilter["ivs"]].value}`,
        value.not
      );
    })
    .join("&");
}

export { ivsStrParser };
