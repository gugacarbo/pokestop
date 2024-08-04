import { useMessages } from "next-intl";
import { SearchFilter } from "../schemas/search-filter-schema";
import { applyNot } from ".";
import {
  accessNestedKey,
  LastNestedKeysOfType,
  NestedKeyOf,
  NestedObject,
} from "@/lib/nested";

function booleanStrParser(
  current_filter: SearchFilter,
  filterKey: NestedKeyOf<SearchFilter>,
  valueKey: string,
  translationKey: string
): string {
  const { filters } = useMessages() as IntlMessages;

  const category = accessNestedKey(current_filter, filterKey);

  const filtered = Object.entries(category).filter(
    ([_, value]) => value[valueKey as keyof typeof value]
  );

  const messages = accessNestedKey(
    filters,
    filterKey as NestedKeyOf<typeof filters>
  );

  return filtered
    .map(([key, value]) => {
      const cur = messages[key as keyof typeof messages];

      return applyNot(
        `${
          typeof cur === "string"
            ? cur
            : cur[translationKey as keyof typeof cur]
        }`,

        //@ts-ignore
        typeof cur !== "string" ? value?.not : false
      );
    })
    .join(",");
}

export { booleanStrParser };
