"use client";

import { useCallback, useMemo } from "react";
import { useSettings } from "@/features/settings/use-settings";
import { POKEDEX } from "@/data/pokedex";

import type { PokemonName, PokemonID } from "@/@types/pokemon";
import {
  getPokemonByName,
  getPokemonByID,
  getPokemonFamilyMembers,
  searchPokemonByName,
} from "@/features/pokemon";

import { useSpeculativePokemon } from "./useSpeculativePokemon";

const speculativePokemon: PokemonID[] = [];

export function usePokedex() {
  const { settings } = useSettings();

  const list = useMemo(
    () =>
      POKEDEX.filter((pokemon) => {
        if (settings?.showSpeculative === true) {
          return true;
        }

        return speculativePokemon.includes(pokemon.id) === false;
      }),
    [settings?.showSpeculative]
  );

  const byName = useCallback(
    (name: PokemonName) => getPokemonByName(name, list),
    [list]
  );
  const byId = useCallback((id: PokemonID) => getPokemonByID(id, list), [list]);
  const familyMembers = useCallback(
    (familyId: PokemonID) => getPokemonFamilyMembers(familyId, list),
    [list]
  );
  const searchByName = useCallback(
    (query: string) => searchPokemonByName(query, list),
    [list]
  );

  return {
    list,
    byName,
    byId,
    familyMembers,
    searchByName,
  };
}
