import { useMemo } from "react";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { useRankedSpreads } from "@/hooks/useRankedSpreads";
import { useCandidate } from "@/features/candidate/use-candidate";

function useDisplayedSpreads() {
  const { inspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const rankedSpreads = useRankedSpreads();

  return useMemo(() => {
    if (inspectedLevelCap === null) {
      return [];
    }

    const spreadsForLevel = rankedSpreads[inspectedLevelCap.level];

    const candidateSpread = spreadsForLevel.find(
      (rankedSpread) =>
        rankedSpread.ivs.atk === candidate.ivs.atk &&
        rankedSpread.ivs.def === candidate.ivs.def &&
        rankedSpread.ivs.sta === candidate.ivs.sta
    );

    return [
      candidateSpread,
      ...spreadsForLevel.filter(
        (rankedSpread) =>
          rankedSpread.ivs.atk !== candidateSpread?.ivs.atk ||
          rankedSpread.ivs.def !== candidateSpread?.ivs.def ||
          rankedSpread.ivs.sta !== candidateSpread?.ivs.sta
      ),
    ].filter((spread): spread is RankedSpread => spread !== undefined);
  }, [inspectedLevelCap, candidate, rankedSpreads]);
}

export { useDisplayedSpreads };
