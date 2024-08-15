import { z } from "zod";

export const outputFieldSchema = z.boolean().default(false);

export const outputDataSchema = z.object({
  level: outputFieldSchema,
  rank: outputFieldSchema,
  cp: outputFieldSchema,
  xlCandy: outputFieldSchema,
  stats: outputFieldSchema,
  statProduct: outputFieldSchema,
  bulkProduct: outputFieldSchema,
  percent: outputFieldSchema,
});

export const outputDataKeySchema = outputDataSchema.keyof();

export type OutputDataKey = z.infer<typeof outputDataKeySchema>;
export type OutputField = z.infer<typeof outputFieldSchema>;
export type OutputData = z.infer<typeof outputDataSchema>;

export const outputDataKeys = Object.keys(
  outputDataSchema.shape
) as OutputDataKey[];
