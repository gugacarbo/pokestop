import { z } from "zod";
import { moveSchema } from "../move/move";

export const rawPokemonSchema = z.object({
  dex: z.number(),
  buddyDistance: z.number(),
  speciesId: z.string(),

  speciesName: z.string(),
  types: z.array(z.string()),
  family: z
    .object({
      id: z.string(),
      parent: z.string().optional(),
      evolutions: z.array(z.string()).optional(),
    })
    .optional(),
  thirdMoveCost: z.number(),
  baseStats: z.object({
    atk: z.number(),
    def: z.number(),
    hp: z.number(),
  }),
  fastMoves: z.array(z.string()),
  chargedMoves: z.array(z.string()),
  legacyMoves: z.array(z.string()).optional(),
  eliteMoves: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),

  fastMovePool: z.array(moveSchema).optional(),
  chargedMovePool: z.array(moveSchema).optional(),

  shadowEligible: z.boolean().optional(),
  nicknames: z.array(z.string()).optional(),
  released: z.boolean().optional(),
});

export interface RawPokemonData extends z.infer<typeof rawPokemonSchema> {}
