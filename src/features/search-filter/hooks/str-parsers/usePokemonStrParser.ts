import { SearchFilter } from "../../schemas/search-filter-schema";
import { applyNot } from ".";

function usePokemonStrParser(current_filter: SearchFilter): string {
  const filterValue = current_filter.text.pokemon_name;

  return Object.values(filterValue)
    .map((value) => {
      return applyNot(
        `${value.withFamily ? "+" : ""}${value?.value}`,
        value?.not
      );
    })
    .join(",");
}

export { usePokemonStrParser };
