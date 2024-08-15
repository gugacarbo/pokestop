import { z } from "zod";
import { leagueKeySchema } from "@/@types/league";
import { levelCapNumberSchema } from "./level-cap";
import { outputDataSchema } from "./output-data";

const leagueSettingsSchema = z
  .record(leagueKeySchema, z.boolean().default(true))
  .refine((obj): obj is Required<typeof obj> =>
    leagueKeySchema.options.every((key) => obj[key] != null)
  );

const levelCapsSettingsSchema = z
  .record(levelCapNumberSchema, z.boolean().default(true))
  .refine((obj): obj is Required<typeof obj> =>
    levelCapNumberSchema.options.every((key) => obj[key.value] != null)
  );

export const settingsSchema = z
  .object({
    leagues: leagueSettingsSchema,
    levelCaps: levelCapsSettingsSchema,
    leagueOrder: z.array(leagueKeySchema).default([]),
    outputData: outputDataSchema,
    showSpeculative: z.boolean().default(false),
    showRankingMetric: z.boolean().default(true),
    showMinimumLevel: z.boolean().default(false),
    allowImpossibleFloors: z.boolean().default(true),
    invertIVDropdown: z.boolean().default(false),
    layout: z.enum(["grid", "list"]).default("grid"),
    showFamily: z.boolean().default(true),
  })
  .required();

export type Settings = z.infer<typeof settingsSchema>;
