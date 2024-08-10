"use client"


import React, { FC, useEffect } from 'react';

import { useCandidate, CandidateActionTypes } from '@/hooks/useCandidate';
import { useSettings } from '@/hooks/use-settings';

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
    <label className='block mr-6 mb-2'>
      <span className='text-gray-500 text-xs dark:text-gray-400'>
        Minimum Level
      </span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.MinimumLevel,
            payload: Number(evt.target.value),
          })
        }
        value={candidate.minimumLevel}
        className='block form-select mt-1 mr-6 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full'
      >
        <option value={1}>1</option>
        <option value={15}>15 - Research</option>
        <option value={20}>20 - Raid</option>
        <option value={25}>25 - Purified</option>

        <option disabled>---</option>

        {Array.from({ length: 100 }).map((_, i) => (
          <option key={i} value={(i + 1) / 2 + 0.5}>
            {(i + 1) / 2 + 0.5}
          </option>
        ))}
      </select>
    </label>
  ) : (
    <></>
  );
};

export default CandidateBuilderMinimumLevel;
