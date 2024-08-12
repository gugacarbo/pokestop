import React, { FC } from "react";

import { useCandidate, CandidateActionTypes } from "@/hooks/useCandidate";

import { IVFloor, IV_FLOORS } from "@/data/ivFloor";
import { useSettings } from "@/features/settings/use-settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const CandidateBuilderIVFloor: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  return (
    <Label>
      <span className="text-muted-foreground text-xs">IV Floor</span>

      <Select
        onValueChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.Floor,
            payload: parseInt(evt) as IVFloor,
          })
        }
        value={String(candidate.floor)}
      >
        <SelectTrigger>
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
              {floor.value} - {floor.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
};

export default CandidateBuilderIVFloor;
