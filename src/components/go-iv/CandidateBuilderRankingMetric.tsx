"use client"

import React, { FC, useEffect } from "react";

import { useCandidate, CandidateActionTypes } from "@/hooks/useCandidate";
import { useSettings } from "@/hooks/use-settings";
import { RankableMetric, RANKABLE_METRICS } from "@/data/stat";

function useSyncCandidateRankingMetricWithDefault() {
  const { settings } = useSettings();
  const { dispatch } = useCandidate();

  useEffect(() => {
    if (settings.showRankingMetric === false) {
      dispatch({
        type: CandidateActionTypes.RankingMetric,
        payload: "product",
      });
    }
  }, [dispatch, settings.showRankingMetric]);
}

const CandidateBuilderRankingMetric: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  useSyncCandidateRankingMetricWithDefault();

  return settings.showRankingMetric ? (
    <label className="block mr-6 mb-2">
      <span className="text-gray-500 text-xs dark:text-gray-400">Rank By</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.RankingMetric,
            payload: evt.target.value as RankableMetric,
          })
        }
        value={candidate.rankingMetric}
        className="block form-select mt-1 mr-6 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full"
      >
        {RANKABLE_METRICS.map((rankableMetric) => (
          <option key={rankableMetric.key} value={rankableMetric.key}>
            {rankableMetric.name}
          </option>
        ))}
      </select>
    </label>
  ) : (
    <></>
  );
};

export default CandidateBuilderRankingMetric;
