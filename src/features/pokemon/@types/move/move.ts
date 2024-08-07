import { z } from "zod";
import { pokemonTypeSchema } from "../pokemon/pokemon-type";
import { moveArchetypeSchema } from "./move-types";

export const moveSchema = z.object({
  moveId: z.string(),
  name: z.string(),
  abbreviation: z.string().optional(),
  type: pokemonTypeSchema,
  power: z.number(),
  energy: z.number(),
  energyGain: z.number(),
  cooldown: z.number(),
  buffs: z.array(z.number()).optional(),
  buffApplyChance: z.number().optional(),
  buffsSelf: z.array(z.number()).optional(),
  buffsOpponent: z.array(z.number()).optional(),
  buffTarget: z.union([
    z.literal("opponent"),
    z.literal("self"),
    z.literal("both"),
  ]).optional(),
  archetype: moveArchetypeSchema,
  legacy: z.boolean().optional(),
  elite: z.boolean().optional(),
  displayName: z.string().optional(),
});

export interface Move extends z.infer<typeof moveSchema> {}
