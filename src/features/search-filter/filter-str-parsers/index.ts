import type { SearchFilter } from "../search-filter-schema";

import { ivsStrParser } from "./ivs-str-parser";
import { starsStrParser } from "./stars-str-parser";
import { acquirementStrParser } from "./tags/acquirement-str-parser";

function parseFilters(filters: SearchFilter) {
  const tags = Object.values({
    acquirement: acquirementStrParser(filters),
  })
    .filter((v) => v)
    .join("&");

  return {
    stars: starsStrParser(filters),
    ivs: ivsStrParser(filters),
    tags,
  };
}

export { starsStrParser, parseFilters };
