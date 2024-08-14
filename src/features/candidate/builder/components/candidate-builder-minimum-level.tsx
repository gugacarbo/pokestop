"use client";

import React, { FC, useEffect } from "react";
import { useTranslations } from "next-intl";

import {
  useCandidate,
  CandidateActionTypes,
} from "@/features/candidate/use-candidate";
import { useSettings } from "@/features/settings/use-settings";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function useSyncCandidateMinimumLevelWithDefault() {
  const { settings } = useSettings();
  const { dispatch } = useCandidate();

  useEffect(() => {
    if (settings.showMinimumLevel === false) {
      dispatch({
        type: CandidateActionTypes.MinimumLevel,
        payload: 1,
      });
    }
  }, [dispatch, settings.showMinimumLevel]);
}

const CandidateBuilderMinimumLevel: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();
  const t = useTranslations("settings");

  useSyncCandidateMinimumLevelWithDefault();

  return settings.showMinimumLevel ? (
    <Label>
      <span className="text-muted-foreground text-xs">
        {t("minimum-level.title")}
      </span>

      <Select
        onValueChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.MinimumLevel,
            payload: Number(evt),
          })
        }
        value={String(candidate.minimumLevel)}
      >
        <SelectTrigger>
          <SelectValue placeholder="select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"1"}>{t("minimum-level.fields.1.value")}</SelectItem>
          <SelectItem value={"15"}>{t("minimum-level.fields.15.value")}</SelectItem>
          <SelectItem value={"20"}>{t("minimum-level.fields.20.value")}</SelectItem>
          <SelectItem value={"25"}>{t("minimum-level.fields.25.value")}</SelectItem>
          <SelectSeparator />
          {Array.from({ length: 100 })

            .map((_, i) => (
              <SelectItem key={i} value={String((i + 1) / 2 + 0.5)}>
                {(i + 1) / 2 + 0.5}
              </SelectItem>
            ))
            .filter(
              (_, i) =>
                (i + 1) / 2 + 0.5 !== 1 &&
                (i + 1) / 2 + 0.5 !== 15 &&
                (i + 1) / 2 + 0.5 !== 20 &&
                (i + 1) / 2 + 0.5 !== 25
            )}
        </SelectContent>
      </Select>
    </Label>
  ) : null;
};

export { CandidateBuilderMinimumLevel };
