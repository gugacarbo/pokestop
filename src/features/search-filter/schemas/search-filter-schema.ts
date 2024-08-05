import { z } from "zod";
import { booleanSchema, zBool } from "./";
import { rangeNumber } from "./defaults";

export type RangeFilterMode = "eq" | "gt" | "lt" | "int";

const starsFilterSchema = z.object({
  0: booleanSchema,
  1: booleanSchema,
  2: booleanSchema,
  3: booleanSchema,
  4: booleanSchema,
});

// ? Iv Filter
const ivFilterSchema = z.object({
  value: z.number().min(0).max(4).default(2),
  mode: z.enum(["eq", "gt", "lt"]).default("eq"),
  active: z.coerce.boolean().default(false),
  not: zBool,
});

const ivsFilterSchema = z.object({
  attack: ivFilterSchema,
  defense: ivFilterSchema,
  hp: ivFilterSchema,
});

const cpFilterSchema = rangeNumber;
const buddyFilterSchema = rangeNumber;

//| Stats Filter
const statsFilterSchema = z.object({
  stars: starsFilterSchema,
  ivs: ivsFilterSchema,
  cp: cpFilterSchema,
  buddy: buddyFilterSchema,
});

// ? Filter by Acquirement
const acquirementFilterSchema = z.object({
  rocket: booleanSchema,
  raid: booleanSchema,
  traded: booleanSchema,
  research: booleanSchema,
  gbl: booleanSchema,
  hatched: booleanSchema,
  eggsonly: booleanSchema,
});

// ? Region Filter
const regionFilterSchema = z.object({
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

// ? Rarity Filter
const rarityFilterSchema = z.object({
  lucky: booleanSchema,
  shiny: booleanSchema,
  legendary: booleanSchema,
  mythical: booleanSchema,
  ultrabeasts: booleanSchema,
  costume: booleanSchema,
  shadow: booleanSchema,
  purified: booleanSchema,
  adventureeffect: booleanSchema,
  background: booleanSchema,
  specialbackground: booleanSchema,
  locationbackground: booleanSchema,
  defender: booleanSchema,
  xl: booleanSchema,
  xxl: booleanSchema,
  xs: booleanSchema,
  xxs: booleanSchema,
});

// ? Gender Filter
const genderFilterSchema = z.object({
  male: booleanSchema,
  female: booleanSchema,
  genderunknown: booleanSchema,
});

//? Evolve Filter
const evolutionFilterSchema = z.object({
  evolve: booleanSchema,
  evolvenew: booleanSchema,
  item: booleanSchema,
  tradeevolve: booleanSchema,
  evolvequest: booleanSchema,
  fusion: booleanSchema,
  megaevolve: booleanSchema,
  mega: booleanSchema,
  mega2: booleanSchema,
});

//| Tags Filter
const tagsFilterSchema = z.object({
  region: regionFilterSchema,
  acquirement: acquirementFilterSchema,
  rarity: rarityFilterSchema,
  gender: genderFilterSchema,
  evolution: evolutionFilterSchema,
});

// * All Filters
export const searchFilterSchema = z.object({
  stats: statsFilterSchema,
  tags: tagsFilterSchema,
});

export type SearchFilter = z.infer<typeof searchFilterSchema>;

export const defaultValues: SearchFilter = searchFilterSchema.parse({
  stats: {
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
        not: false,
      },
      defense: {
        value: 2,
        mode: "eq",
        active: false,
        not: false,
      },
      hp: {
        value: 2,
        mode: "eq",
        active: false,
        not: false,
      },
    },
    cp: {
      value: [1500],
      mode: "eq",
      active: false,
      not: false,
    },
    buddy: {
      value: [1],
      mode: "eq",
      active: false,
      not: false,
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
      ultrabeasts: {
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
      adventureeffect: {
        value: false,
        not: false,
      },
      background: {
        value: false,
        not: false,
      },
      specialbackground: {
        value: false,
        not: false,
      },
      locationbackground: {
        value: false,
        not: false,
      },
      defender: {
        value: false,
        not: false,
      },

      xxl: {
        value: false,
        not: false,
      },
      xxs: {
        value: false,
        not: false,
      },
      xl: {
        value: false,
        not: false,
      },
      xs: {
        value: false,
        not: false,
      },
    },
    gender: {
      male: {
        value: false,
        not: false,
      },
      female: {
        value: false,
        not: false,
      },
      genderunknown: {
        value: false,
        not: false,
      },
    },
    evolution: {
      evolve: {
        value: false,
        not: false,
      },
      evolvenew: {
        value: false,
        not: false,
      },
      item: {
        value: false,
        not: false,
      },
      tradeevolve: {
        value: false,
        not: false,
      },
      evolvequest: {
        value: false,
        not: false,
      },
      fusion: {
        value: false,
        not: false,
      },
      megaevolve: {
        value: false,
        not: false,
      },
      mega: {
        value: false,
        not: false,
      },
      mega2: {
        value: false,
        not: false,
      },
    },
  },
});
