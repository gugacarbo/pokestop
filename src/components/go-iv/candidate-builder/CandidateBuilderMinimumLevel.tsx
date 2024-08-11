"use client";

import React, { FC, useEffect } from "react";

import { useCandidate, CandidateActionTypes } from "@/hooks/useCandidate";
import { useSettings } from "@/hooks/use-settings";
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

  useSyncCandidateMinimumLevelWithDefault();

  return settings.showMinimumLevel ? (
    <Label>
      <span className="text-muted-foreground text-xs">Minimum Level</span>

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
          <SelectItem value={"1"}>1</SelectItem>
          <SelectItem value={"15"}>15 - Research</SelectItem>
          <SelectItem value={"20"}>20 - Raid</SelectItem>
          <SelectItem value={"25"}>25 - Purified</SelectItem>
          <SelectSeparator />
          {Array.from({ length: 100 })

            .map((_, i) => (
              <SelectItem key={i} value={String((i + 1) / 2 + 0.5)}>
                {(i + 1) / 2 + 0.5}
              </SelectItem>
            ))
            .filter((_,i) => ((i + 1) / 2 + 0.5) !== 1 && ((i + 1) / 2 + 0.5) !== 15 && ((i + 1) / 2 + 0.5) !== 20 && ((i + 1) / 2 + 0.5) !== 25)}
        </SelectContent>
      </Select>
    </Label>
  ) : null;
};

export default CandidateBuilderMinimumLevel;
