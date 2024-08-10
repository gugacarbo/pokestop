import { defaultValues, SearchFilter } from "../schemas/search-filter-schema";

export const nullPreset: SearchFilter = {
  ...defaultValues,
  stats: {
    ...defaultValues.stats,
    ivs: {
      attack: {
        active: true,
        mode: "eq",
        value: [0],
        not: false,
        operator: "and",
      },
      defense: {
        active: true,
        mode: "eq",
        value: [0],
        not: false,
        operator: "and",
      },
      hp: {
        active: true,
        mode: "eq",
        value: [0],
        not: false,
        operator: "and",
      },
    },
  },
};
