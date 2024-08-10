import { useMessages } from "next-intl";
import { applyNot, applyOperator } from ".";
import {
  RangeFilterMode,
  SearchFilter,
} from "../../schemas/search-filter-schema";
import { NestedKeyOf, accessNestedKey } from "@/lib/nested";

function useRangeStrParser(
  current_filter: SearchFilter,
  filterKey: NestedKeyOf<SearchFilter>
): string {
  const { filters } = useMessages() as unknown as IntlMessages;

  const filter = accessNestedKey(current_filter, filterKey);

  const active = filter["active" as keyof typeof filter];

  if (!active) {
    return "";
  }

  const value = filter["value" as keyof typeof filter] as unknown as number[];

  const mode = filter[
    "mode" as keyof typeof filter
  ] as unknown as RangeFilterMode;

  const message = [];

  const messages = accessNestedKey(
    filters,
    filterKey as NestedKeyOf<typeof filters>
  );

  message.push(messages["value" as keyof typeof messages]);
  message.push(mode === "lt" ? "-" : "");
  message.push(value[0]);
  message.push(mode === "gt" || mode === "int" ? "-" : "");
  message.push(value?.[1] ? value[1] : "");

  return applyOperator(
    applyNot(
      message.join(""),
      filter["not" as keyof typeof filter] as unknown as boolean
    ),
    //@ts-ignore
    filter["operator" as keyof typeof filter]
  );
}

export { useRangeStrParser };
