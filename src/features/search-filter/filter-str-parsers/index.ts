import type { SearchFilter } from "../search-filter-schema";
import { booleanStrParser } from "./boolean-str-parser";

import { ivsStrParser } from "./ivs-str-parser";
import { starsStrParser } from "./stars-str-parser";

function parseFilters(filters: SearchFilter) {
  const tags = Object.values({
    acquirement: booleanStrParser(
      filters,
      "tags.acquirement",
      "value",
      "value"
    ),
    region: booleanStrParser(filters, "tags.region", "value", "value"),
    rarity: booleanStrParser(filters, "tags.rarity", "value", "value"),
  })
    .filter((v) => v)
    .join("&");

  return {
    stars: starsStrParser(filters),
    ivs: ivsStrParser(filters),
    tags,
  };
}

function applyNot(filter: string, not: boolean) {
  return (not ? "!" : "") + filter;
}

export { parseFilters, applyNot };
