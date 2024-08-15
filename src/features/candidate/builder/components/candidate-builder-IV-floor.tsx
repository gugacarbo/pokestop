"use client";

import React, { FC } from "react";

import {
  useCandidate,
  CandidateActionTypes,
} from "@/features/candidate/use-candidate";

import { IVFloor, IV_FLOORS } from "@/@types/iv-floor";
import { useSettings } from "@/features/settings/use-settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

const CandidateBuilderIVFloor: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();
  const t = useTranslations("settings");

  return (
    <Label>
      <span className="text-muted-foreground text-xs">
        {t("iv-floor.title")}
      </span>
      <Select
        value={String(candidate.floor)}
        onValueChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.Floor,
            payload: parseInt(evt) as IVFloor,
          })
        }
      >
        <SelectTrigger className="min-w-32">
          <SelectValue placeholder="Select IV Floor" />
        </SelectTrigger>
        <SelectContent>
          {IV_FLOORS.filter((floor) => {
            if (settings.allowImpossibleFloors) {
              return true;
            } else {
              return floor.value >= (candidate.species.floor ?? 0);
            }
          }).map((floor) => (
            <SelectItem key={floor.value} value={String(floor.value)}>
              {floor.value} -{" "}
              {
                //@ts-ignore
                t(`iv-floor.values.${floor.value}.name`)
              }
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
};

export { CandidateBuilderIVFloor };
