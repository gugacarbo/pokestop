"use client";

import { useContext } from "react";

import { LeagueKey } from "@/data/league";
import { LevelCapNumber } from "@/data/levelCap";
import { OutputDataKey } from "@/data/outputData";
import { SettingsContext } from "./context/settings-context";

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
};

function useSettings() {
  const value = useContext(SettingsContext);
  if (value === null) {
    throw new Error(
      "useSettings must be called within the context of a SettingsProvider"
    );
  }
  return value;
}

export default useSettings;

export { SettingsProvider } from "./context/settings-provider";
export { SettingsActionTypes } from "./settings-reducer";
export { parseInitialSettings } from "./parse-initial-settings";
export { useSettings };
