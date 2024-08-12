"use client";

import React, { FC, useEffect } from "react";

import { useCandidate, CandidateActionTypes } from "@/hooks/useCandidate";
import { useSettings } from "@/features/settings/use-settings";
import { RankableMetric, RANKABLE_METRICS } from "@/data/stat";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <Label>
      <span className="text-muted-foreground text-xs">Rank By</span>
      <Select
        onValueChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.RankingMetric,
            payload: evt as RankableMetric,
          })
        }
        value={candidate.rankingMetric}
      >
        <SelectTrigger>
          <SelectValue placeholder="select" />
        </SelectTrigger>
        <SelectContent>
          {RANKABLE_METRICS.map((rankableMetric) => (
            <SelectItem key={rankableMetric.key} value={rankableMetric.key}>
              {rankableMetric.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  ) : (
    <></>
  );
};

export default CandidateBuilderRankingMetric;
