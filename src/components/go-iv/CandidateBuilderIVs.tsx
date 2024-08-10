import React, { FC } from "react";

import { useCandidate, CandidateActionTypes } from "@/hooks/useCandidate";

import { IV, IV_RANGE } from "@/data/iv";
import { STATS } from "@/data/stat";
import { useSettings } from "@/hooks/use-settings";

const CandidateBuilderIVs: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  return (
    <div className="gap-2 grid grid-cols-3 mr-6">
      {STATS.map((stat) => (
        <label key={stat.key} className="block mb-2">
          <span className="text-gray-500 text-xs dark:text-gray-400">
            {stat.name} IV
          </span>

          <select
            onChange={(evt) =>
              dispatch({
                type: CandidateActionTypes.IV,
                payload: {
                  stat: stat.key,
                  value: parseInt(evt.target.value) as IV,
                },
              })
            }
            value={candidate.ivs[stat.key]}
            className="block form-select mt-1 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full"
          >
            {IV_RANGE.filter((iv) => iv >= candidate.floor)
              [settings.invertIVDropdown ? "reverse" : "concat"]()
              .map((iv) => (
                <option key={iv} value={iv}>
                  {iv}
                </option>
              ))}
          </select>
        </label>
      ))}
    </div>
  );
};

export default CandidateBuilderIVs;
