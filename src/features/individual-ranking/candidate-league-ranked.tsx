"use client";

import React, { FC, useMemo } from "react";

import { LEVEL_CAPS } from "@/@types/level-cap";
import { useSettings } from "@/features/settings/use-settings";
import { useCandidate } from "@/features/candidate/use-candidate";
import { useDataTable } from "@/features/data-table/useDataTable";
import { rankSpreadColumns } from "@/features/data-table/data-columns/rank-spread-columns";
import { useRankedSpreads } from "@/features/individual-ranking/hooks/useRankedSpreads";
import { IV_FLOORS } from "@/data/ivFloor";
import { DataTable } from "@/features/data-table/components/data-table";
import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { RankedSpread } from "@/lib/generateRankedSpreads";

import { SelectLevelCapButton } from "./components/select-level-cap-button";
import { LevelCap } from "@/@types/level-cap";

const CandidateLeagueRanked: FC = () => {
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const { setInspectedLevelCap, league } = useLeague();

  const rankedSpreads = useRankedSpreads();

  const data = useMemo(
    () =>
      LEVEL_CAPS.filter((levelCap) => settings.levelCaps[levelCap] === true)
        .map((levelCap) => {
          const candidateAtLevel = rankedSpreads[levelCap].find(
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
    [settings.levelCaps, candidate, rankedSpreads]
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
            <SelectLevelCapButton
              league={league.key}
              species_name={candidate.species.name}
              minimumLevel={candidate.minimumLevel}
              levelCap={levelCap}
              setInspectedLevelCap={setInspectedLevelCap}
            />
          );
        },
      },
      ...rankSpreadColumns,
    ],
    data,
    enableSorting: false,
    state: {
      columnVisibility: {
        rank: settings.outputData.rank || true,
        level: settings.outputData.level || true,
        cp: settings.outputData.cp || true,
        xlCandy: settings.outputData.xlCandy || true,
        stats_sta: settings.outputData.stats || true,
        stats_def: settings.outputData.stats || true,
        stats_atk: settings.outputData.stats || true,
        statProduct: settings.outputData.statProduct || true,
        bulkProduct: settings.outputData.bulkProduct || true,
        percentOfMax: settings.outputData.percent || true,
      },
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
