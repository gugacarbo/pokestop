import { z } from "zod";

export const ivs = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
  z.literal(10),
  z.literal(11),
  z.literal(12),
  z.literal(13),
  z.literal(14),
  z.literal(15),
]);

export type IV = z.infer<typeof ivs>;

export const IV_RANGE: IV[] = ivs.options.map((option) => option.value);

export const MIN_IV = IV_RANGE[0];

export const MAX_IV = IV_RANGE[IV_RANGE.length - 1];
