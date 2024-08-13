"use client";

import React, { useMemo } from "react";
import { RankedSpread } from "@/lib/generateRankedSpreads";
import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { useCandidate, Candidate } from "@/features/candidate/use-candidate";
import { useRankedSpreads } from "@/hooks/useRankedSpreads";

import CandidateLeagueTopSpreadsAtLevelCapDownload from "../components/download-csv";
import { DataTable } from "@/features/data-table/components/data-table";
import { useDataTable } from "@/features/data-table/useDataTable";
import { rankSpreadColumns } from "@/features/data-table/data-columns/rank-spread-columns";
import { useSettings } from "@/features/settings/use-settings";
import { TablePageSizeSelect } from "@/features/data-table/components/table-page-size-select";

function useDisplayedSpreads() {
  const { inspectedLevelCap } = useLeague();
  const { candidate } = useCandidate();
  const rankedSpreads = useRankedSpreads();

  return useMemo(() => {
    if (inspectedLevelCap === null) {
      return [];
    }

    const spreadsForLevel = rankedSpreads[inspectedLevelCap.level];

    const candidateSpread = spreadsForLevel.find(
      (rankedSpread) =>
        rankedSpread.ivs.atk === candidate.ivs.atk &&
        rankedSpread.ivs.def === candidate.ivs.def &&
        rankedSpread.ivs.sta === candidate.ivs.sta
    );

    return [candidateSpread, ...spreadsForLevel].filter(
      (spread): spread is RankedSpread => spread !== undefined
    );
  }, [inspectedLevelCap, candidate, rankedSpreads]);
}

function CandidateLeagueTopSpreadsAtLevelCap() {
  const displayedSpreads = useDisplayedSpreads();
  const { candidate } = useCandidate();

  const { settings } = useSettings();

  const rankingMetric = candidate.rankingMetric;

  const columnsOrder: string[] = [
    { value: "rank", priority: 0 },
    {
      value: "percentOfMax",
      priority: rankingMetric === "product" ? 2 : 4,
    },
    {
      value: "bulkProduct",
      priority: rankingMetric === "bulkProduct" ? 2 : 4,
    },
    {
      value: "level",
      priority: 2,
    },
    {
      value: "cp",
      priority: 2,
    },
    {
      value: "xlCount",
      priority: 2,
    },
    {
      value: "product",
      priority: rankingMetric === "product" ? 1 : 3,
    },
    {
      value: "stats_atk",
      priority: rankingMetric === "atk" ? 1 : 3,
    },
    {
      value: "stats_def",
      priority: rankingMetric === "def" ? 1 : 3,
    },
    {
      value: "stats_sta",
      priority: rankingMetric === "sta" ? 1 : 3,
    },
    {
      value: "bulkProduct",
      priority: rankingMetric === "bulkProduct" ? 1 : 3,
    },
  ]
    .sort((a, b) => a.priority - b.priority)
    .map((column) => column.value);

  const table = useDataTable({
    columns: rankSpreadColumns,
    data: displayedSpreads,
    state: {
      columnVisibility: {
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
    },
    initialState: {
      columnPinning: {
        left: ["select-level-cap", "rank"],
      },
      columnOrder: columnsOrder,
    },
  });

  return (
    <div className="w-full overflow-x-auto">
      <DataTable table={table} cardClassName="rounded-none " />
      <div className="flex justify-between items-center p-2 w-full">
        <TablePageSizeSelect table={table} />
        <CandidateLeagueTopSpreadsAtLevelCapDownload />
      </div>
    </div>
  );
}

export { CandidateLeagueTopSpreadsAtLevelCap };
