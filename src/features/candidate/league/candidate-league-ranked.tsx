import React, { FC, useMemo } from "react";

import { LEVEL_CAPS, LevelCap } from "@/data/levelCap";
import { useSettings } from "@/features/settings/use-settings";
import { useCandidate } from "@/hooks/useCandidate";
import { useDataTable } from "@/features/data-table/useDataTable";
import { rankSpreadColumns } from "@/features/data-table/data-columns/rank-spread-columns";
import { useRankedSpreads } from "@/hooks/useRankedSpreads";
import { IV_FLOORS } from "@/data/ivFloor";
import { DataTable } from "@/features/data-table/components/data-table";
import { useLeague } from "@/hooks/useLeague";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { RankedSpread } from "@/lib/generateRankedSpreads";

const CandidateLeagueRanked: FC = () => {
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const { setInspectedLevelCap, league } = useLeague();

  const rankedSpreads = useRankedSpreads();

  const data = useMemo(
    () =>
      LEVEL_CAPS.filter(
        (levelCap) => settings.levelCaps[levelCap.level] === true
      )
        .map((levelCap) => {
          const candidateAtLevel = rankedSpreads[levelCap.level].find(
            (spread) =>
              spread.ivs.atk === candidate.ivs.atk &&
              spread.ivs.def === candidate.ivs.def &&
              spread.ivs.sta === candidate.ivs.sta
          );

          if (!candidateAtLevel) {
            return;
          }
          const floor = IV_FLOORS.find(
            (ivFloor) => ivFloor.value === candidate.floor
          );
          if (floor === undefined) {
            return;
          }
          const resp: RankedSpread & {
            levelCap?: LevelCap;
            floor?: (typeof IV_FLOORS)[0];
          } = candidateAtLevel;

          resp.levelCap = levelCap;
          resp.floor = floor;

          return resp;
        })
        .filter((i) => !!i),
    [settings.levelCaps, candidate]
  );

  const table = useDataTable({
    columns: [
      {
        accessorKey: "levelCap",
        header: "",
        id: "select-level-cap",
        size: 1,
        cell: (row) => {
          const levelCap = row.getValue<LevelCap>();
          return (
            <Button
              variant="outline"
              size="sm-icon"
              className="size-8"
              onClick={() => setInspectedLevelCap(levelCap)}
              title={`View top ${league.name} IV spreads for ${candidate.species.name}, Level ${candidate.minimumLevel}-${levelCap.level}`}
            >
              <MenuIcon className="text-muted-foreground size-4" />
            </Button>
          );
        },
      },
      ...rankSpreadColumns,
    ],
    data,
    enableSorting: false,
    initialVisibility: {
      rank: settings.outputData.rank,
      level: settings.outputData.level,
      cp: settings.outputData.cp,
      xlCandy: settings.outputData.xlCandy,
      stats_sta: settings.outputData.stats,
      stats_def: settings.outputData.stats,
      stats_atk: settings.outputData.stats,
      statProduct: settings.outputData.statProduct,
      bulkProduct: settings.outputData.bulkProduct,
      percentOfMax: settings.outputData.percent,
    },
    initialState: {
      columnPinning: {
        left: ["select-level-cap", "rank"],
      },
      columnOrder: ["select-level-cap", "percentOfMax"],
    },
  });

  return (
    <div className="w-full overflow-x-auto">
      <DataTable table={table} cardClassName="rounded-t-none" short />
    </div>
  );
};

export default CandidateLeagueRanked;
