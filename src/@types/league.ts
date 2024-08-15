import { z } from "zod";

export const leagueKeySchema = z.enum(["great", "ultra", "master", "little"]);

export const leagueCPKeysSchema = z.union([
  z.literal(500),
  z.literal(1500),
  z.literal(2500),
  z.literal(10000),
]);

export const leagueSchema = z.object({
  key: leagueKeySchema,
  cp: leagueCPKeysSchema,
});

export type LeagueKey = z.infer<typeof leagueKeySchema>;
export type LeagueCPCap = z.infer<typeof leagueCPKeysSchema>;

export type League = z.infer<typeof leagueSchema>;
