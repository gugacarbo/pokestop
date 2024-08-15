"use client";

import React, { FC, useEffect } from "react";
import { useTranslations } from "next-intl";

import {
  useCandidate,
  CandidateActionTypes,
} from "@/features/candidate/use-candidate";

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

function CandidateBuilderRankingMetric() {
  const t = useTranslations("settings");

  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  useSyncCandidateRankingMetricWithDefault();

  if (!settings.showRankingMetric) return null;

  return (
    <Label>
      <span className="text-muted-foreground text-xs">
        {t(`ranking-metrics.title`)}
      </span>
      <Select
        onValueChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.RankingMetric,
            payload: evt as RankableMetric,
          })
        }
        value={candidate.rankingMetric}
      >
        <SelectTrigger className="min-w-32 capitalize">
          <SelectValue placeholder={t("common.select")} />
        </SelectTrigger>
        <SelectContent>
          {RANKABLE_METRICS.map((rankableMetric) => (
            <SelectItem
              key={rankableMetric.key}
              value={rankableMetric.key}
              className="capitalize"
            >
              {t(`ranking-metrics.fields.${rankableMetric.key}.value`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
}

export { CandidateBuilderRankingMetric };
