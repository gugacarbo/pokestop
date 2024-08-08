import { SearchFilter } from "../../schemas/search-filter-schema";
import { applyNot } from ".";
import { useMessages } from "next-intl";

function usePokemonStrParser(current_filter: SearchFilter): string {
  const filterValue = current_filter.text.pokemon_name;

  const { pokemons } = useMessages() as unknown as IntlMessages;

  return Object.values(filterValue)
    .map((value) => {
      return applyNot(
        `${value.withFamily ? "+" : ""}${
          pokemons.dex[String(value?.value) as keyof typeof pokemons.dex].name
        }`,
        value?.not
      );
    })
    .join(",");
}

export { usePokemonStrParser };
