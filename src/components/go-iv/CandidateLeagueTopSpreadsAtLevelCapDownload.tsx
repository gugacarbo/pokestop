import React, { FC } from 'react';

import { useRankedSpreads } from '@/hooks/useRankedSpreads';
import { useLeague } from '@/hooks/useLeague';
import { useCandidate } from '@/hooks/useCandidate';

import { downloadFile } from '@/utils/downloadFile';
import { xlCount } from '@/lib/xlCount';
import { DownloadIcon } from 'lucide-react';

const CandidateLeagueTopSpreadsAtLevelCapDownload: FC = () => {
  const { candidate } = useCandidate();
  const { league, inspectedLevelCap } = useLeague();
  const rankedSpreads = useRankedSpreads();

  if (inspectedLevelCap === null) {
    throw new Error('A level cap must be inspected to export');
  }

  function exportToCSV() {
    if (inspectedLevelCap === null) {
      throw new Error('A level cap must be inspected to export');
    }

    const fileName = `${candidate.species.id}-${league.cp}-${inspectedLevelCap.level}-${candidate.floor}-${candidate.rankingMetric}.csv`;

    const csvContent = rankedSpreads[inspectedLevelCap.level].reduce(
      (output, spread) =>
        output.concat(
          `\n${spread.rank},${spread.ivs.atk},${spread.ivs.def},${
            spread.ivs.sta
          },${spread.level},${spread.cp},${xlCount(spread.level)},${
            spread.stats.atk.value
          },${spread.stats.def.value},${spread.stats.sta.value},${
            spread.product.value
          },${spread.bulkProduct.value}`,
        ),
      'Rank,Atk IV,Def IV,Sta IV,Level,CP,XL,Attack,Defense,Stamina,Stat Product,Bulk Product',
    );

    downloadFile(fileName, 'text/csv', csvContent);
  }

  return (
    <footer className='flex justify-center items-center border-gray-200 bg-white py-2 border-t w-full'>
      <button
        onClick={exportToCSV}
        className='flex justify-start items-center p-1 rounded-full sm:rounded focus-visible-ring text-gray-700 hover:text-black'
      >
        <span className='mr-2 font-semibold text-xs'>
          Export All {rankedSpreads[inspectedLevelCap.level].length} to CSV
        </span>

        <DownloadIcon className='w-4 h-4' />
      </button>
    </footer>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCapDownload;
