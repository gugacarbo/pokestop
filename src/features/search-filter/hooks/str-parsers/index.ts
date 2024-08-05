import { SearchFilter } from "../../schemas/search-filter-schema";
import { useBuddyStrParser } from "./buddy-str-parser";
import { useCpStrParser } from "./cp-str-parser";

import { useIvsStrParser } from "./ivs-str-parser";
import { useRangeStrParser } from "./range-str-parser";
import { useStarsStrParser } from "./stars-str-parser";
import { useBooleanStrParser } from "./useBooleanStrParser";

function useParseFilters(filters: SearchFilter) {
  const tags = {
    acquirement: useBooleanStrParser(filters, "tags.acquirement"),
    region: useBooleanStrParser(filters, "tags.region"),
    rarity: useBooleanStrParser(filters, "tags.rarity"),
    gender: useBooleanStrParser(filters, "tags.gender"),
    evolution: useBooleanStrParser(filters, "tags.evolution"),
  };

  const stats = {
    stars: useStarsStrParser(filters),
    ivs: useIvsStrParser(filters),
    cp: useRangeStrParser(filters, "stats.cp"),
    buddy: useRangeStrParser(filters, "stats.buddy"),
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
