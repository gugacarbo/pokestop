import { useMemo } from "react";

import { LevelCap } from "@/@types/level-cap";

import { useLeague } from "../useLeague";
import { useCandidate } from "@/features/candidate/use-candidate";
import { useSettings } from "@/features/settings/use-settings";

import {
  generateRankedSpreads,
  RankedSpread,
} from "@/lib/generateRankedSpreads";

export function useMemoRankedSpreads(levelCapNumber: LevelCap) {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  const value = useMemo<RankedSpread[]>(() => {
    if (settings.levelCaps[levelCapNumber] === false) return [];

    return generateRankedSpreads(
      candidate.species,
      candidate.floor,
      league.cp,
      levelCapNumber,
      candidate.minimumLevel,
      candidate.rankingMetric
    );
  }, [
    settings.levelCaps,
    levelCapNumber,
    candidate.species,
    candidate.floor,
    candidate.minimumLevel,
    candidate.rankingMetric,
    league.cp,
  ]);

  return value;
}
