import { applyNot } from ".";
import { SearchFilter } from "../search-filter-schema";

interface StarsStrParserProps {
  stars: SearchFilter["stars"];
}

function starsStrParser({ stars }: StarsStrParserProps) {
  return Object.entries(stars)
    .map(([key, value]) => {
      return value.value ? applyNot(`${key}*`, value.not) : null;
    })
    .filter((c) => c)
    .join(",");
}

export { starsStrParser };
