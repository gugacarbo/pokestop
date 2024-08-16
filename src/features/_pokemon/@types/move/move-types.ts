import { z } from "zod";

export const moveArchetypeSchema = z.enum([
  "Low Quality",
  "Debuff",
  "Boost Nuke",
  "High Energy",
  "General",
  "Boost",
  "Spam/Bait",
  "Nuke",
  "Heavy Damage",
  "Self-Debuff Nuke",
  "Debuff Spam/Bait",
  "Fast Charge",
  "High Energy Debuff",
  "Self-Debuff",
  "Multipurpose",
  "Boost Spam/Bait",
  "Debuff Nuke",
  "Self-Debuff Spam",
  "Spam/Bait Debuff",
  "Nuke Debuff",
]);

export type MoveArchetype = z.infer<typeof moveArchetypeSchema>;
