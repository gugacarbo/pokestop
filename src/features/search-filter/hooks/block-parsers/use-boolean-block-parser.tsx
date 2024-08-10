import { useMessages } from "next-intl";
import {
  accessNestedKey,
  LastNestedKeysOfType,
  NestedKeyOf,
  NestedObject,
} from "@/lib/nested";
import { SearchFilter } from "../../schemas/search-filter-schema";
import { applyNot, applyOperator } from ".";
import { FormField } from "@/components/ui/form";

function useBooleanBlockParser(
  current_filter: SearchFilter,
  filterKey: NestedKeyOf<SearchFilter>
) {
  const { filters } = useMessages() as unknown as IntlMessages;

  const category = accessNestedKey(current_filter, filterKey);

  const filtered = Object.entries(category).filter(
    ([_, value]) => value["value" as keyof typeof value]
  );

  const messages = accessNestedKey(
    filters,
    filterKey as NestedKeyOf<typeof filters>
  );

  return filtered.map(([key, value]) => {
    const cur = messages[key as keyof typeof messages];
    return (
      key
    );
  });
}

export { useBooleanBlockParser };
