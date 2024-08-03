"use client";
import { z } from "zod";

// * Star Filter
const booleanSchema = z.coerce.boolean().default(false);

const zBool = z.object({
  value: booleanSchema,
  not: booleanSchema,
});

export type IvFilterMode = "eq" | "gt" | "lt";

const starsFilterSchema = z.object({
  0: zBool,
  1: zBool,
  2: zBool,
  3: zBool,
  4: zBool,
});

// ? Iv Filter
export const ivFilterSchema = z.object({
  value: z.number().min(0).max(4).default(2),
  mode: z.enum(["eq", "gt", "lt"]).default("eq"),
  active: z.coerce.boolean().default(false),
  not: booleanSchema,
});

const ivsFilterSchema = z.object({
  attack: ivFilterSchema,
  defense: ivFilterSchema,
  hp: ivFilterSchema,
});

// ? Filter by Acquirement
export const acquirementFilterSchema = z.object({
  eggsonly: zBool,
  gbl: zBool,
  hatched: zBool,
  raid: zBool,
  research: zBool,
  rocket: zBool,
  traded: zBool,
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

export const raritiesFilterSchema = z.object({
  lucky: booleanSchema,
  legendary: booleanSchema,
  mythical: booleanSchema,
  purified: booleanSchema,
  shadow: booleanSchema,
  shiny: booleanSchema,
  costume: booleanSchema,
  ultrabeasts: booleanSchema,
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
    0: {
      value: false,
      not: false,
    },
    1: {
      value: false,
      not: false,
    },
    2: {
      value: false,
      not: false,
    },
    3: {
      value: false,
      not: false,
    },
    4: {
      value: false,
      not: false,
    },
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
      eggsonly: {
        value: false,
        not: false,
      },
      gbl: {
        value: false,
        not: false,
      },
      hatched: {
        value: false,
        not: false,
      },
      raid: {
        value: false,
        not: false,
      },
      research: {
        value: false,
        not: false,
      },
      rocket: {
        value: false,
        not: false,
      },
      traded: {
        value: false,
        not: false,
      },
    },
    rarities: {
      lucky: false,
      legendary: false,
      mythical: false,
      purified: false,
      shadow: false,
      shiny: false,
      costume: false,
      ultrabeasts: false,
    },
  },
});
