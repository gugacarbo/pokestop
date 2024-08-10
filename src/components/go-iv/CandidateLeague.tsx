import React, { FC } from 'react';

import { League } from '@/data/league';
import { Provider as LeagueContextProvider } from '@/hooks/useLeague';

import CandidateLeagueHeader from './CandidateLeagueHeader';
import CandidateLeagueContent from './CandidateLeagueContent';

const CandidateLeague: FC<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <div className='border-gray-200 border-y sm:shadow-md sm:shadow-gray-100 sm:dark:shadow-xl sm:dark:shadow-gray-900 sm:border dark:border-transparent sm:rounded-lg w-full overflow-hidden'>
        <CandidateLeagueHeader />

        <CandidateLeagueContent />
      </div>
    </LeagueContextProvider>
  );
};

export default CandidateLeague;
