import { LeagueKey } from "@/data/league";
import { LevelCapNumber } from "@/data/levelCap";
import { OutputDataKey } from "@/data/outputData";

export type Settings = {
  leagues: { [key in LeagueKey]: boolean };
  leagueOrder: LeagueKey[];
  levelCaps: { [key in LevelCapNumber]: boolean };
  outputData: { [key in OutputDataKey]: boolean };
  showSpeculative: boolean;
  showRankingMetric: boolean;
  showMinimumLevel: boolean;
  allowImpossibleFloors: boolean;
  invertIVDropdown: boolean;
  layout: "grid" | "list";
  showFamily: boolean;
};

export { SettingsProvider } from "./context/settings-provider";
export { SettingsActionTypes } from "./settings-reducer";
export { useSettings } from "./use-settings";
