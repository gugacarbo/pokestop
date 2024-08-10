import { SearchOperator } from "../../schemas/defaults";
import { SearchFilter } from "../../schemas/search-filter-schema";

import { useRangeStrParser } from "./range-str-parser";
import { useStarsStrParser } from "./stars-str-parser";
import { useBooleanBlockParser } from "./use-boolean-block-parser";
import { usePokemonStrParser } from "./usePokemonStrParser";

function useBlockFiltersParse(filters: SearchFilter) {
  const tags = {
    acquirement: useBooleanBlockParser(filters, "tags.acquirement"),
    region: useBooleanBlockParser(filters, "tags.region"),
    rarity: useBooleanBlockParser(filters, "tags.rarity"),
    gender: useBooleanBlockParser(filters, "tags.gender"),
    evolution: useBooleanBlockParser(filters, "tags.evolution"),
    size: useBooleanBlockParser(filters, "tags.size"),
    type: useBooleanBlockParser(filters, "tags.type"),
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

  return {
    tags,
  };
}

function applyNot(filter: string, not: boolean): string {
  return (not ? "!" : "") + filter;
}

function concatObjectValues(obj: object): React.ReactNode[] {
  return Object.values(obj).reduce((acc, value) => {
    //if is react node
    if (Array.isArray(value)) {
      return [...acc, ...value];
    }
    if (typeof value === "object") {
      return [...acc, ...concatObjectValues(value)];
    }
    return acc;
  }, [] as JSX.Element[]);
}

function applyOperator(value: string, operator?: SearchOperator) {
  const op = operator === "and" ? "&" : ",";
  return `${op}${value}`;
}

export { useBlockFiltersParse, applyNot, applyOperator };
