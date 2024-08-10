import { applyNot, applyOperator } from ".";
import { SearchFilter } from "../../schemas/search-filter-schema";

function useStarsStrParser({ stats: { stars } }: SearchFilter) {
  return Object.entries(stars)
    .map(([key, value]) => {
      return value.value
        ? applyOperator(applyNot(`${key}*`, value.not), value.operator)
        : null;
    })
    .filter((c) => c);
}

export { useStarsStrParser };
