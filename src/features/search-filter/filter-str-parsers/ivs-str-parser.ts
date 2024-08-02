import { useMessages } from "next-intl";
import { SearchFilter } from "../search-filter-schema";

interface IvStrParserProps {
  ivs: SearchFilter["ivs"];
}

function ivsStrParser({ ivs }: IvStrParserProps) {
  const { filters } = useMessages() as unknown as { filters: SearchFilter };

  return Object.entries(ivs)
    .filter(([_, value]) => value.active)
    .map(([key, value]) => {
      return `${value.mode === "lt" ? "-" : ""}${value.value}${
        value.mode === "gt" ? "-" : ""
      }${filters?.ivs[key as keyof SearchFilter["ivs"]]}`;
    })
    .join("&");
}

export { ivsStrParser };
