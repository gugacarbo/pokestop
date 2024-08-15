import { z } from "zod";

export const levelCapNumberSchema = z.union([
  z.literal(40),
  z.literal(41),
  z.literal(50),
  z.literal(51),
]);

export type LevelCap = z.infer<typeof levelCapNumberSchema>;

export const LEVEL_CAPS: LevelCap[] = levelCapNumberSchema.options.map(
  (l) => l.value
);
