"use client";
import React, { FC } from "react";

import { IV_FLOORS } from "@/data/ivFloor";

import { useCandidate } from "@/hooks/useCandidate";
import { useLeague } from "@/hooks/useLeague";

import { RANKABLE_METRICS } from "@/data/stat";
import { ArrowLeftIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";

const leagueHeaderClass = cva("", {
  variants: {
    background: {
      great: "from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600",
      ultra: "from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900",
      master: "from-purple-500 to-purple-600",
      little: "from-white to-gray-100",
      none: "",
    },
    stripe: {
      great: "from-red-500 to-red-600",
      ultra: "from-yellow-500 to-yellow-600",
      master: "from-pink-500 to-pink-600",
      little: "from-red-500 to-red-600",
      none: "",
    },
    text: {
      great: "text-white",
      ultra: "text-white",
      master: "text-white",
      little: "text-gray-600",
      none: "",
    },
  },
  defaultVariants: {
    background: "none",
    text: "none",
    stripe: "none",
  },
});

const CandidateLeagueHeader: FC = () => {
  const { candidate } = useCandidate();
  const { league, inspectedLevelCap, setInspectedLevelCap, collapsed } =
    useLeague();

  const rankingMetric = RANKABLE_METRICS.find(
    (metric) => metric.key === candidate.rankingMetric
  );

  if (rankingMetric === undefined) {
    throw new Error("No matching ranking metric could be found.");
  }

  const floor = IV_FLOORS.find((floor) => floor.value === candidate.floor);
  if (floor === undefined) {
    throw new Error("No matching IV floor could be found.");
  }

  return (
    <div
      className={leagueHeaderClass({
        className:
          "z-5 rounded-t-md w-full p-4 bg-gradient-to-br  shadow-md sticky top-0 sm:relative left-0 flex justify-between items-center overflow-hidden font-title",
        background: league.key,
        text: league.key,
      })}
    >
      <div
        className={leagueHeaderClass({
          className:
            "absolute z-0 right-0 top-0 transform rotate-45 w-5 h-72 opacity-90 -translate-x-20 -translate-y-10 bg-gradient-to-b",
          stripe: league.key,
        })}
      />

      {inspectedLevelCap && (
        <Button
          size="sm-icon"
          variant="outline"
          onClick={() => setInspectedLevelCap(null)}
          title={`Back`}
          className="z-10 bg-background/70 opacity-70 hover:opacity-100 mr-2"
        >
          <ArrowLeftIcon className="size-4" />
        </Button>
      )}

      <div className="z-10 flex-grow">
        {inspectedLevelCap ? (
          <>
            <h2 className="flex-grow font-semibold leading-snug">
              Top {league.name} IV Spreads for{" "}
              <span key={candidate.species.name}>{candidate.species.name}</span>
            </h2>

            <p className="mt-1 font-semibold text-xs">
              Level: {candidate.minimumLevel} - {inspectedLevelCap.level} (
              {inspectedLevelCap.description})
            </p>
            <p className="mt-1 font-semibold text-xs">
              IV Floor: {floor.value} ({floor.name})
            </p>
            <p className="mt-1 font-semibold text-xs">
              Ranked By: {rankingMetric.name}
            </p>
          </>
        ) : (
          <>
            <h2 className="flex-grow font-semibold leading-none">
              {league.name}
            </h2>
          </>
        )}
      </div>

      {!inspectedLevelCap && (
        <Button
          size="icon"
          variant="outline"
          onClick={() => collapsed.toggle()}
          className="z-10 bg-background/70 opacity-70 hover:opacity-100"
        >
          <ChevronUpIcon
            strokeWidth={2}
            className={`size-7 text-foreground transition-transform ${
              collapsed.value ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      )}
    </div>
  );
};

export { CandidateLeagueHeader };
