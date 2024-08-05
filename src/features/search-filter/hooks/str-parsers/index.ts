import { SearchFilter } from "../../schemas/search-filter-schema";
import { useBuddyStrParser } from "./buddy-str-parser";
import { useCpStrParser } from "./cp-str-parser";

import { useIvsStrParser } from "./ivs-str-parser";
import { useStarsStrParser } from "./stars-str-parser";
import { useBooleanStrParser } from "./useBooleanStrParser";

function useParseFilters(filters: SearchFilter) {
  const tags = {
    acquirement: useBooleanStrParser(
      filters,
      "tags.acquirement",
      "value",
      "value"
    ),
    region: useBooleanStrParser(filters, "tags.region", "value", "value"),
    rarity: useBooleanStrParser(filters, "tags.rarity", "value", "value"),
    gender: useBooleanStrParser(filters, "tags.gender", "value", "value"),
  };

  const stats = {
    stars: useStarsStrParser(filters),
    ivs: useIvsStrParser(filters),
    cp: useCpStrParser(filters),
    buddy: useBuddyStrParser(filters),
  };

  return {
    stats,
    tags,
  };
}

function applyNot(filter: string, not: boolean) {
  return (not ? "!" : "") + filter;
}

export { useParseFilters, applyNot };
