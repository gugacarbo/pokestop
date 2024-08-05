import { z } from "zod";

// * Star Filter
export const zBool = z.coerce.boolean().default(false);

export const booleanSchema = z.object({
  value: zBool,
  not: zBool,
});

export const rangeNumber = z.object({
  active: z.coerce.boolean().default(false),
  value: z.array(z.coerce.number().min(0).default(1)).max(2).min(1),
  mode: z.enum(["eq", "gt", "lt", "int"]).default("eq"),
  not: zBool,
});
