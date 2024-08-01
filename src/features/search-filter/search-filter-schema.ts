"use client";
import { z } from "zod";

// * Star Filter
const starFilterSchema = z.boolean().default(false);
const starsFilterSchema = z.object({
  0: starFilterSchema,
  1: starFilterSchema,
  2: starFilterSchema,
  3: starFilterSchema,
  4: starFilterSchema,
});

export type IvFilterMode = "eq" | "gt" | "lt";

// ? Iv Filter
export const ivFilterSchema = z.object({
  value: z.number().min(0).max(4).default(2),
  mode: z.enum(["eq", "gt", "lt"]).default("eq"),
  active: z.boolean().default(false),
});

const ivsFilterSchema = z.object({
  attack: ivFilterSchema,
  defense: ivFilterSchema,
  hp: ivFilterSchema,
});

// ? All Filters
export const searchFilterSchema = z.object({
  stars: starsFilterSchema,
  ivs: ivsFilterSchema,
});

export type SearchFilter = z.infer<typeof searchFilterSchema>;

export const defaultValues = searchFilterSchema.parse({
  stars: {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  },
  ivs: {
    attack: {
      value: 2,
      mode: "eq",
      active: false,
    },
    defense: {
      value: 2,
      mode: "eq",
      active: false,
    },
    hp: {
      value: 2,
      mode: "eq",
      active: false,
    },
  },
});

