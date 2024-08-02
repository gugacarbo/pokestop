import type { SearchFilter } from "../search-filter-schema";

import { ivsStrParser } from "./ivs-str-parser";
import { starsStrParser } from "./stars-str-parser";

function parseFilters(filters: SearchFilter) {
  return {
    stars: starsStrParser(filters),
    ivs: ivsStrParser(filters),
  };
}

export { starsStrParser, parseFilters };
