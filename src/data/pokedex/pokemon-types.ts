import { z } from "zod";

export const pokemonTypes = z.enum([
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

export type PokemonType = z.infer<typeof pokemonTypes>;
