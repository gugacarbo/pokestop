import { defaultValues, SearchFilter } from "../search-filter-schema";

export const nullPreset: SearchFilter = {
  ...defaultValues,
  ivs: {
    attack: {
      active: true,
      mode: "eq",
      value: 0,
    },
    defense: {
      active: true,
      mode: "eq",
      value: 0,
    },
    hp: {
      active: true,
      mode: "eq",
      value: 0,
    },
  },
};
