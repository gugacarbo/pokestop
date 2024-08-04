import { z } from "zod";

// * Star Filter
export const zBool = z.coerce.boolean().default(false);

export const booleanSchema = z.object({
  value: zBool,
  not: zBool,
});
