import React, { FC } from "react";

import { useCandidate, CandidateActionTypes } from "@/hooks/useCandidate";

import { IV, IV_RANGE } from "@/data/iv";
import { STATS } from "@/data/stat";
import { useSettings } from "@/features/settings/use-settings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CandidateBuilderIVs: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  return (
    <div className="gap-2 grid grid-cols-3">
      {STATS.map((stat) => (
        <Label key={stat.key}>
          <span className="text-muted-foreground text-xs">{stat.name} IV</span>
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
                [settings.invertIVDropdown ? "reverse" : "concat"]()
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
};

export default CandidateBuilderIVs;
