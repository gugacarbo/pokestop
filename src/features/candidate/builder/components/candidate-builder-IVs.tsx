"use client";

import React, { FC } from "react";

import {
  useCandidate,
  CandidateActionTypes,
} from "@/features/candidate/use-candidate";

import { IV, IV_RANGE } from "@/data/iv";
import { STATS } from "@/data/stat";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/features/settings";
import { useTranslations } from "next-intl";

function CandidateBuilderIVs() {
  const { candidate, dispatch } = useCandidate();
  const {
    settings: { invertIVDropdown },
  } = useSettings();

  const t = useTranslations("settings");

  return (
    <div className="gap-2 grid grid-cols-3">
      {STATS.map((stat) => (
        <Label key={stat.key}>
          <span className="text-muted-foreground text-xs">
            {
              //@ts-ignore
              t(`stats.${stat.key}.value`)
            }{" "}
            IV
          </span>
          <Select
            onValueChange={(evt) =>
              dispatch({
                type: CandidateActionTypes.IV,
                payload: {
                  stat: stat.key,
                  value: parseInt(evt) as IV,
                },
              })
            }
            value={String(candidate.ivs[stat.key])}
          >
            <SelectTrigger>
              <SelectValue placeholder={stat.name} />
            </SelectTrigger>
            <SelectContent>
              {IV_RANGE.filter((iv) => iv >= candidate.floor)
                [invertIVDropdown ? "reverse" : "concat"]()
                .map((iv) => (
                  <SelectItem key={iv} value={String(iv)}>
                    {String(iv)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </Label>
      ))}
    </div>
  );
}

export { CandidateBuilderIVs };
