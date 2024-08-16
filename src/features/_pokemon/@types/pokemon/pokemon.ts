import { z } from "zod";
import { rawPokemonSchema } from "./raw-pokemon-data";

export const pokemonSchema = rawPokemonSchema;

interface PokemonMethods {
  // initialize: (targetCP: number | boolean, defaultMode?: string) => void;
  // calculateCP: () => number;
  // hasTag: (tag: string) => boolean;
  // hasMove: (moveId: string) => boolean;
  // setShadowType: (val: string) => void;
  // generateIVCombinations: () => Combination[];
  // setLevel: (level: number, isCP: boolean) => void;
}

export interface Pokemon
  extends z.infer<typeof pokemonSchema>,
    PokemonMethods {}

export const defaultPokemon: Pokemon = pokemonSchema.parse({
  dex: 0,
  buddyDistance: 0,
  speciesId: "",
  speciesName: "",
  types: [],
  thirdMoveCost: 0,
  baseStats: {
    atk: 0,
    def: 0,
    hp: 0,
  },
  fastMoves: [],
  chargedMoves: [],
});
