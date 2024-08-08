import { SearchFilter } from "../../schemas/search-filter-schema";

import { useRangeStrParser } from "./range-str-parser";
import { useStarsStrParser } from "./stars-str-parser";
import { useBooleanStrParser } from "./useBooleanStrParser";
import { usePokemonStrParser } from "./usePokemonStrParser";

function useParseFilters(filters: SearchFilter) {
  const tags = {
    acquirement: useBooleanStrParser(filters, "tags.acquirement"),
    region: useBooleanStrParser(filters, "tags.region"),
    rarity: useBooleanStrParser(filters, "tags.rarity"),
    gender: useBooleanStrParser(filters, "tags.gender"),
    evolution: useBooleanStrParser(filters, "tags.evolution"),
    size: useBooleanStrParser(filters, "tags.size"),
  };

  const stats = {
    stars: useStarsStrParser(filters),
    ivs: {
      atk: useRangeStrParser(filters, "stats.ivs.attack"),
      def: useRangeStrParser(filters, "stats.ivs.defense"),
      hp: useRangeStrParser(filters, "stats.ivs.hp"),
    },
    cp: useRangeStrParser(filters, "stats.cp"),
    buddy: useRangeStrParser(filters, "stats.buddy"),
    catch: {
      age: useRangeStrParser(filters, "stats.catch.age"),
      distance: useRangeStrParser(filters, "stats.catch.distance"),
      year: useRangeStrParser(filters, "stats.catch.year"),
    },
  };

  const text = {
    pokemon_name: usePokemonStrParser(filters),
  };

  return concatObjectValues({
    stats,
    tags,
    text,
  });
}

function applyNot(filter: string, not: boolean): string {
  return (not ? "!" : "") + filter;
}

function concatObjectValues(obj: object) {
  return Object.values(obj).reduce((acc, value) => {
    if (typeof value === "string") {
      if (value === "") return acc;
      return acc + (acc !== "" ? "," : "") + value;
    }
    return acc + (acc !== "" ? "," : "") + concatObjectValues(value);
  }, "");
}

export { useParseFilters, applyNot };
