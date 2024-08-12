import { Settings } from ".";
import { useLocalSettings } from "./use-local-settings";

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
  showMinimumLevel: false,
  showRankingMetric: false,
  allowImpossibleFloors: true,
  invertIVDropdown: false,
  layout: "grid",
};

export function useInitialSettings() {
  try {
    const [settings] = useLocalSettings();

    return {
      ...defaultSettings,
      ...settings,
      outputData: {
        ...defaultSettings.outputData,
        ...(settings ?? {}).outputData,
      },
    };
  } catch (err) {
    return defaultSettings;
  }
}
