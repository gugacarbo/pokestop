import { LeagueCPCap } from "@/@types/league";
import { LevelCap } from "@/@types/level-cap";
import { IVFloor } from "@/@types/iv-floor";
import { Pokemon, PokemonIVs, PokemonStats } from "@/@types/pokemon";

import { getMaximizedStats } from "./getMaximizedStats";
import { getIVSpreads } from "./getIVSpreads";
import { RankableMetric } from "@/@types/stat";
import { useCallback, useMemo } from "react";

export type ComparableToMax = {
  value: number;
  percentOfMax: number;
};
export type SpreadWithMaximizedStats = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  product: number;
  bulkProduct: number;
  stats: PokemonStats;
};
export type RankedSpread = {
  ivs: PokemonIVs;
  cp: number;
  level: number;
  rank: number;
  product: ComparableToMax;
  bulkProduct: ComparableToMax;
  stats: {
    atk: ComparableToMax;
    def: ComparableToMax;
    sta: ComparableToMax;
  };
};

const compareToMax = (value: number, max: number): ComparableToMax => ({
  value,
  percentOfMax: value / max,
});

export function useGenerateRankedSpreads(
  pokemon: Pokemon,
  floor: IVFloor,
  maxCP: LeagueCPCap,
  maxLevel: LevelCap,
  minLevel: number,
  rankingMetric: RankableMetric
) {
  const getRankingMetricValue = useCallback(
    (spread: SpreadWithMaximizedStats) => {
      if (rankingMetric === "product") {
        return spread.product;
      }
      if (rankingMetric === "bulkProduct") {
        return spread.bulkProduct;
      } else {
        return spread.stats[rankingMetric];
      }
    },
    [rankingMetric]
  );

  const spreadsWithStats = useMemo(
    () =>
      getIVSpreads(floor)
        .map((ivs) => getMaximizedStats(pokemon, ivs, maxCP, maxLevel))
        .filter((spreadWithStats) => spreadWithStats.level >= minLevel)
        .sort((a, b) => {
          // in instances where two spreads have the same rankable metric value we
          // require a tiebreaker to determine order. this is "CP" if the ranking
          // metric is product, or "Stat Product" if the ranking metric is anything
          // else. this tiebreaker only affects the order that results show up in
          // since rank numbers can be shared by identical ranking metric values.
          if (getRankingMetricValue(b) === getRankingMetricValue(a)) {
            if (rankingMetric === "product") {
              return b.cp - a.cp;
            } else {
              return b.product - a.product;
            }
          }
          return getRankingMetricValue(b) - getRankingMetricValue(a);
        }),
    [
      pokemon,
      maxCP,
      maxLevel,
      minLevel,
      getRankingMetricValue,
      rankingMetric,
      floor,
    ]
  );

  const result = useMemo(() => {
    const output: RankedSpread[] = [];
    const rankOneSpread = spreadsWithStats[0];
    for (let i = 0; i < spreadsWithStats.length; i++) {
      let rank = i + 1;

      const currentSpread = spreadsWithStats[i];
      const previousSpread = spreadsWithStats[i - 1];
      if (previousSpread !== undefined) {
        // if the currentSpread has the same ranking metric value as the
        // previousSpread then their rank number should be the same

        if (
          getRankingMetricValue(currentSpread) ===
          getRankingMetricValue(previousSpread)
        ) {
          rank = output[i - 1].rank;
        }
      }

      output.push({
        rank,
        ivs: currentSpread.ivs,
        cp: currentSpread.cp,
        level: currentSpread.level,
        stats: {
          atk: compareToMax(currentSpread.stats.atk, rankOneSpread.stats.atk),
          def: compareToMax(currentSpread.stats.def, rankOneSpread.stats.def),
          sta: compareToMax(currentSpread.stats.sta, rankOneSpread.stats.sta),
        },
        product: compareToMax(currentSpread.product, rankOneSpread.product),
        bulkProduct: compareToMax(
          currentSpread.bulkProduct,
          rankOneSpread.bulkProduct
        ),
      });
    }
    return output;
  }, [spreadsWithStats, getRankingMetricValue]);

  return result;
}
