import type { SearchFilter } from "../search-filter-schema";

import { ivsStrParser } from "./ivs-str-parser";
import { starsStrParser } from "./stars-str-parser";
import { acquirementStrParser } from "./tags/acquirement-str-parser";
import { rarityStrParser } from "./tags/rarity-str-parser";
import { regionStrParser } from "./tags/region-str-parser";

function parseFilters(filters: SearchFilter) {
  const tags = Object.values({
    acquirement: acquirementStrParser(filters),
    region: regionStrParser(filters),
    rarity: rarityStrParser(filters),
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
