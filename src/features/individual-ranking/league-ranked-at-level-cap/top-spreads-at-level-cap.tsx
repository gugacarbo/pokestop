"use client";

import React from "react";

import { useCandidate } from "@/features/candidate/use-candidate";

import CandidateLeagueTopSpreadsAtLevelCapDownload from "../components/download-csv";
import { DataTable } from "@/features/data-table/components/data-table";
import { useDataTable } from "@/features/data-table/useDataTable";
import { rankSpreadColumns } from "@/features/data-table/data-columns/rank-spread-columns";
import { useSettings } from "@/features/settings/use-settings";
import { TablePageSizeSelect } from "@/features/data-table/components/table-page-size-select";
import { useDisplayedSpreads } from "./use-displayed-spreads";

function CandidateLeagueTopSpreadsAtLevelCap() {
  const displayedSpreads = useDisplayedSpreads();

  const {
    candidate: { rankingMetric },
  } = useCandidate();

  const { settings } = useSettings();

  const columnsOrder: string[] = [
    { value: "rank", priority: 0 },
    {
      value: "percentOfMax",
      priority: 1,
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
      value: "statProduct",
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
      columnPinning: {
        left: ["select-level-cap", "rank"],
      },
      rowPinning: {
        top: ["0"],
      },
      columnOrder: columnsOrder,
    },
    initialSorting: "rank",
    initialState: {
      sorting: [
        {
          id: "rank",
          desc: false,
        },
      ],
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
