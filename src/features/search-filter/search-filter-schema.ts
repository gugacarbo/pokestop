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

export const regionFilterSchema = z.object({
  kanto: zBool,
  johto: zBool,
  hoenn: zBool,
  sinnoh: zBool,
  unova: zBool,
  kalos: zBool,
  alola: zBool,
  galar: zBool,
  hisui: zBool,
  paldea: zBool,
});

export const rarityFilterSchema = z.object({
  lucky: zBool,
  legendary: zBool,
  mythical: zBool,
  purified: zBool,
  shadow: zBool,
  shiny: zBool,
  costume: zBool,
  ultrabeasts: zBool,
});

export const tagsFilterSchema = z.object({
  region: regionFilterSchema,
  acquirement: acquirementFilterSchema,
  rarity: rarityFilterSchema,
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
    region: {
      kanto: {
        value: false,
        not: false,
      },
      johto: {
        value: false,
        not: false,
      },
      hoenn: {
        value: false,
        not: false,
      },
      sinnoh: {
        value: false,
        not: false,
      },
      unova: {
        value: false,
        not: false,
      },
      kalos: {
        value: false,
        not: false,
      },
      alola: {
        value: false,
        not: false,
      },
      galar: {
        value: false,
        not: false,
      },
      hisui: {
        value: false,
        not: false,
      },
      paldea: {
        value: false,
        not: false,
      },
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
    rarity: {
      lucky: {
        value: false,
        not: false,
      },
      legendary: {
        value: false,
        not: false,
      },
      mythical: {
        value: false,
        not: false,
      },
      purified: {
        value: false,
        not: false,
      },
      shadow: {
        value: false,
        not: false,
      },
      shiny: {
        value: false,
        not: false,
      },
      costume: {
        value: false,
        not: false,
      },
      ultrabeasts: {
        value: false,
        not: false,
      },
    },
  },
});
