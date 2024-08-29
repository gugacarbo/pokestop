import { z } from "zod";

export const pokemonTypesSchema = z.enum([
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
]);

export type PokemonType = z.infer<typeof pokemonTypesSchema>;

export const typesArray = pokemonTypesSchema._def.values;