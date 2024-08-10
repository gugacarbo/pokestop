import React, { FC } from 'react';

import { useCandidate, CandidateActionTypes } from '@/hooks/useCandidate';

import { IVFloor, IV_FLOORS } from '@/data/ivFloor';
import { useSettings } from '@/hooks/use-settings';

const CandidateBuilderIVFloor: FC = () => {
  const { candidate, dispatch } = useCandidate();
  const { settings } = useSettings();

  return (
    <label className='block mr-6 mb-2'>
      <span className='text-gray-500 text-xs dark:text-gray-400'>IV Floor</span>

      <select
        onChange={(evt) =>
          dispatch({
            type: CandidateActionTypes.Floor,
            payload: parseInt(evt.target.value) as IVFloor,
          })
        }
        value={candidate.floor}
        className='block form-select mt-1 rounded focus-ring ring-offset-gray-50 dark:ring-offset-gray-900 w-full'
      >
        {IV_FLOORS.filter((floor) => {
          if (settings.allowImpossibleFloors) {
            return true;
          } else {
            return floor.value >= (candidate.species.floor ?? 0);
          }
        }).map((floor) => (
          <option key={floor.value} value={floor.value}>
            {floor.value} - {floor.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CandidateBuilderIVFloor;
