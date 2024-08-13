import { Settings } from "./use-settings";

export const defaultSettings: Settings = {
  leagues: { great: true, ultra: true, master: true, little: false },
  leagueOrder: ["great", "ultra", "master", "little"],
  levelCaps: { 40: false, 41: false, 50: true, 51: true },
  outputData: {
    level: true,
    rank: true,
    cp: true,
    xlCandy: true,
    stats: true,
    statProduct: true,
    bulkProduct: true,
    percent: true,
  },
  showSpeculative: false,
  showMinimumLevel: true,
  showRankingMetric: true,
  allowImpossibleFloors: true,
  invertIVDropdown: false,
  layout: "grid",
  showFamily: false,
};
