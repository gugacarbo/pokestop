"use client";
import { z } from "zod";

// * Star Filter
const booleanSchema = z.coerce.boolean().default(false);

export type IvFilterMode = "eq" | "gt" | "lt";

const starsFilterSchema = z.object({
  0: booleanSchema,
  1: booleanSchema,
  2: booleanSchema,
  3: booleanSchema,
  4: booleanSchema,
});

// ? Iv Filter
export const ivFilterSchema = z.object({
  value: z.number().min(0).max(4).default(2),
  mode: z.enum(["eq", "gt", "lt"]).default("eq"),
  active: z.coerce.boolean().default(false),
});

const ivsFilterSchema = z.object({
  attack: ivFilterSchema,
  defense: ivFilterSchema,
  hp: ivFilterSchema,
});

export const regionsFilterSchema = z.object({
  kanto: booleanSchema,
  johto: booleanSchema,
  hoenn: booleanSchema,
  sinnoh: booleanSchema,
  unova: booleanSchema,
  kalos: booleanSchema,
  alola: booleanSchema,
  galar: booleanSchema,
  hisui: booleanSchema,
  paldea: booleanSchema,
});

export const acquirementFilterSchema = z.object({
  eggsonly: booleanSchema,
  gbl: booleanSchema,
  hatched: booleanSchema,
  raid: booleanSchema,
  research: booleanSchema,
  rocket: booleanSchema,
  traded: booleanSchema,
});

export const raritiesFilterSchema = z.object({
  lucky: booleanSchema,
  legendary: booleanSchema,
  mythical: booleanSchema,
  purified: booleanSchema,
  shadow: booleanSchema,
  shiny: booleanSchema,
  costume: booleanSchema,
  ultracreature: booleanSchema,
});

export const tagsFilterSchema = z.object({
  regions: regionsFilterSchema,
  acquirement: acquirementFilterSchema,
  rarities: raritiesFilterSchema,
});

// ? All Filters
export const searchFilterSchema = z.object({
  stars: starsFilterSchema,
  ivs: ivsFilterSchema,
  tags: tagsFilterSchema,
});

export type SearchFilter = z.infer<typeof searchFilterSchema>;

export const defaultValues: SearchFilter = searchFilterSchema.parse({
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
  tags: {
    regions: {
      kanto: false,
      johto: false,
      hoenn: false,
      sinnoh: false,
      unova: false,
      kalos: false,
      alola: false,
      galar: false,
      hisui: false,
      paldea: false,
    },
    acquirement: {
      eggsonly: false,
      gbl: false,
      hatched: false,
      raid: false,
      research: false,
      rocket: false,
      traded: false,
    },
    rarities: {
      lucky: false,
      legendary: false,
      mythical: false,
      purified: false,
      shadow: false,
      shiny: false,
      costume: false,
      ultracreature: false,
    },
  },
});
