import { IV } from "../../@types/iv";
import { ivFloors } from "../../@types/iv-floor";
import { isSubsequence } from "../../utils/isSubsequence";

import { POKEDEX } from "./list";
import { z } from "zod";
export { POKEDEX };
export type { PokemonType } from "./pokemon-types";

import { pokemonTypes } from "./pokemon-types";

export const familyStages = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const pokemonSchema = z.object({
  id: z.string(),
  dexNumber: z.number(),
  name: z.string(),
  stats: z.object({
    atk: z.number(),
    def: z.number(),
    sta: z.number(),
  }),
  types: z.tuple([pokemonTypes, z.optional(pokemonTypes)]),
  floor: ivFloors.optional(),
  family: z.object({
    id: z.string(),
    stage: familyStages,
  }),
  aliases: z.optional(z.array(z.string())),
});

export type PokemonFamilyStage = z.infer<typeof familyStages>;
export type Pokemon = z.infer<typeof pokemonSchema>;
/*
{
  id: PokemonID;
  dexNumber: PokedexNumber;
  name: PokemonName;
  stats: PokemonStats;
  types: PokemonType[];
  floor?: IVFloor;
  family: {
    id: PokemonID;
    stage: PokemonFamilyStage;
  };
  aliases?: string[];
};
*/

export type PokemonID = Pokemon["id"];
export type PokemonName = Pokemon["name"];
export type PokedexNumber = Pokemon["dexNumber"];
export type PokemonStats = Pokemon["stats"];

export type PokemonIVs = {
  atk: IV;
  def: IV;
  sta: IV;
};

export function getPokemonByName(name: PokemonName, list: Pokemon[] = POKEDEX) {
  if (!name) return null;

  return list.find((pokemon) => pokemon.name === name) ?? null;
}

export function searchPokemonByName(query: string, list: Pokemon[] = POKEDEX) {
  const lowerCaseQuery = query.toLowerCase();

  const matches = list.filter((pokemon) => {
    return (
      pokemon.aliases?.includes(lowerCaseQuery) ||
      isSubsequence(lowerCaseQuery, pokemon.name.toLowerCase())
    );
  });

  if (matches.length === 0) {
    return null;
  } else if (matches.length === 1) {
    return matches[0];
  } else {
    const exactMatch = matches.find(
      (match) => match.name.toLowerCase() === lowerCaseQuery
    );

    if (exactMatch !== undefined) {
      return exactMatch;
    } else {
      return matches[0];
    }
  }
}

export function getPokemonByID(id: PokemonID, list: Pokemon[] = POKEDEX) {
  if (!id) return null;

  return list.find((pokemon) => pokemon.id === id) ?? null;
}

export function getPokemonFamilyMembers(
  familyID: PokemonID,
  list: Pokemon[] = POKEDEX
) {
  return list.filter((pokemon) => pokemon.family.id === familyID);
}
