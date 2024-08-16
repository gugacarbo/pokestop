import * as React from "react";

import { FilterCard } from "../filter-card";

import { getAllPokemon } from "@/features/_pokemon/actions/get-pokemon";
import { NamesListSelector } from "./names-list-selector";
import { Pokemon } from "@/features/_pokemon/@types";
import { NamesList } from "./names-list";

async function PokemonNameFilter() {
  const pokemons = Object.values(await getAllPokemon(true))
    //remove with same dex
    .reduce((acc, pokemon) => {
      if (!acc.find((p) => p.dex === pokemon.dex)) {
        acc.push(pokemon);
      }
      return acc;
    }, [] as Pokemon[]);

  return (
    <FilterCard filterKey="text.pokemon_name">
      <NamesListSelector pokemons={pokemons} />
      <NamesList />
    </FilterCard>
  );
}

export { PokemonNameFilter };
