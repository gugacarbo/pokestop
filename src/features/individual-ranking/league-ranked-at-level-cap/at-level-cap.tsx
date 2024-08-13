import React, { FC } from "react";

import { getRankedSpreadColors } from "@/utils/getRankColors";

import { xlCount } from "@/lib/xlCount";
import { useSettings } from "@/features/settings/use-settings";
import { useCandidate } from "@/features/candidate/use-candidate";
import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { useRankedSpreads } from "@/hooks/useRankedSpreads";
import { formatValue } from "@/utils/formatValue";

import { IV_FLOORS } from "@/data/ivFloor";
import { LevelCap } from "@/data/levelCap";

import { ListIcon } from "lucide-react";

const CandidateLeagueRankedAtLevelCap: FC<{
  levelCap: LevelCap;
}> = ({ levelCap }) => {
  const { league, setInspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const rankedSpreads = useRankedSpreads();

  const candidateAtLevel = rankedSpreads[levelCap.level].find(
    (spread) =>
      spread.ivs.atk === candidate.ivs.atk &&
      spread.ivs.def === candidate.ivs.def &&
      spread.ivs.sta === candidate.ivs.sta
  );

  const floor = IV_FLOORS.find((ivFloor) => ivFloor.value === candidate.floor);
  if (floor === undefined) {
    throw new Error("No matching IV floor could be found.");
  }

  const colors = getRankedSpreadColors(
    candidateAtLevel,
    candidate.rankingMetric
  );

  const viewAllSpreadButton = (
    <button
      onClick={() => setInspectedLevelCap(levelCap)}
      className="mr-2 p-0.5 rounded focus-visible-ring"
      title={`View top ${league.name} IV spreads for ${candidate.species.name}, Level ${candidate.minimumLevel}-${levelCap.level}, ${floor.name}`}
    >
      <ListIcon className="w-4 h-4" />
    </button>
  );

  if (candidateAtLevel === undefined) {
    const columnCount = [
      settings.outputData.cp,
      settings.outputData.statProduct,
      settings.outputData.stats,
      settings.outputData.stats,
      settings.outputData.stats,
      settings.outputData.bulkProduct,
    ].filter(Boolean).length;

    return (
      <tr
        onClick={() => setInspectedLevelCap(levelCap)}
        className={`${colors.background} ${colors.text} cursor-pointer`}
      >
        {settings.outputData.rank && <td>?</td>}

        {settings.outputData.level && (
          <td>
            <>
              ?<span className="text-xs"> /{levelCap.level}</span>
            </>
          </td>
        )}

        <td colSpan={columnCount}>
          <p className="text-sm">
            Could not find a ranked spread matching the candidate{"'"}s IVs
          </p>
        </td>

        <td>{viewAllSpreadButton}</td>
      </tr>
    );
  }

  return (
    <tr
      onClick={() => setInspectedLevelCap(levelCap)}
      className={`${colors.background} ${colors.text} cursor-pointer`}
    >
      {settings.outputData.rank && <td>{candidateAtLevel.rank}</td>}

      {settings.outputData.cp && <td>{candidateAtLevel.cp}</td>}

      {settings.outputData.level && (
        <td>
          <>
            {formatValue(
              candidateAtLevel.level,
              Math.floor(candidateAtLevel.level) === candidateAtLevel.level
                ? undefined
                : 1
            )}
            <span className="text-xs"> /{levelCap.level}</span>
          </>
        </td>
      )}

      {settings.outputData.xlCandy && (
        <td>{xlCount(candidateAtLevel.level)}</td>
      )}

      {settings.outputData.statProduct && (
        <td>
          <>
            <span title={candidateAtLevel.product.value.toString()}>
              {formatValue(candidateAtLevel.product.value, 2)}
            </span>

            <td>value={candidateAtLevel.product.percentOfMax}</td>
          </>
        </td>
      )}

      {settings.outputData.stats && (
        <>
          <td>
            <span title={candidateAtLevel.stats.atk.value.toString()}>
              {formatValue(candidateAtLevel.stats.atk.value, 2)}
            </span>
            <td />
            value={candidateAtLevel.stats.atk.percentOfMax}
          </td>
          <td>
            <span title={candidateAtLevel.stats.def.value.toString()}>
              {formatValue(candidateAtLevel.stats.def.value, 2)}
            </span>
            <td />
            value={candidateAtLevel.stats.def.percentOfMax}
          </td>
          <td>
            <span>{formatValue(candidateAtLevel.stats.sta.value)}</span>
            <td />
            value={candidateAtLevel.stats.sta.percentOfMax}
          </td>
        </>
      )}

      {settings.outputData.bulkProduct && (
        <td>
          <>
            <span title={candidateAtLevel.bulkProduct.value.toString()}>
              {formatValue(candidateAtLevel.bulkProduct.value, 2)}
            </span>

            <td>value={candidateAtLevel.bulkProduct.percentOfMax}</td>
          </>
        </td>
      )}

      <td>{viewAllSpreadButton}</td>
    </tr>
  );
};

export default CandidateLeagueRankedAtLevelCap;
