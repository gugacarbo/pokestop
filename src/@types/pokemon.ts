import { IV } from "@/@types/iv";
import { ivFloors } from "@/@types/iv-floor";

import { z } from "zod";
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
  types: z.tuple([pokemonTypes]).or(z.tuple([pokemonTypes, pokemonTypes])),
  floor: ivFloors.optional(),
  family: z.object({
    id: z.string(),
    stage: familyStages,
  }),
  aliases: z.optional(z.array(z.string())),
});

export type PokemonFamilyStage = z.infer<typeof familyStages>;
export type Pokemon = z.infer<typeof pokemonSchema>;

export type PokemonID = Pokemon["id"];
export type PokemonName = Pokemon["name"];
export type PokedexNumber = Pokemon["dexNumber"];
export type PokemonStats = Pokemon["stats"];

export type PokemonIVs = {
  atk: IV;
  def: IV;
  sta: IV;
};
