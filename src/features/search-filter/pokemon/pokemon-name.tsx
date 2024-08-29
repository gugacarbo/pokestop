import * as React from "react";

import { FilterCard } from "../filter-card";

import { NamesListSelector } from "./names-list-selector";
import { Pokemon } from "@/@types/pokemon";
import { NamesList } from "./names-list";
import { usePokedex } from "@/features/pokedex/use-pokedex";

async function PokemonNameFilter() {
  const{pokemon:{list}}=usePokedex();

  return (
    <FilterCard filterKey="text.pokemon_name">
      <NamesListSelector pokemons={list} />
      <NamesList />
    </FilterCard>
  );
}

export { PokemonNameFilter };

