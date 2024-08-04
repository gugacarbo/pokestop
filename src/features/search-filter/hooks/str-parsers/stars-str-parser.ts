import { applyNot } from ".";
import { SearchFilter } from "../../schemas/search-filter-schema";

function useStarsStrParser({ stats: { stars } }: SearchFilter) {
  return Object.entries(stars)
    .map(([key, value]) => {
      return value.value ? applyNot(`${key}*`, value.not) : null;
    })
    .filter((c) => c)
    .join(",");
}

export { useStarsStrParser };
