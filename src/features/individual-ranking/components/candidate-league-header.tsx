"use client";
import React, { FC } from "react";

import { IV_FLOORS } from "@/data/ivFloor";

import { useCandidate } from "@/features/candidate/use-candidate";
import { useLeague } from "@/features/individual-ranking/hooks/useLeague";

import { RANKABLE_METRICS } from "@/data/stat";
import { ArrowLeftIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { useTranslations } from "next-intl";

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

  const t = useTranslations();

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
          "z-0 rounded-t-md w-full p-4 bg-gradient-to-br  shadow-md sticky top-0 sm:relative left-0 flex justify-between items-center overflow-hidden font-title",
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
              {
                //@ts-ignore
                t("rankings.individual.spreads.top-spreads.title", {
                  //@ts-ignore
                  league: t("rankings.cpLeagues." + league.key + ".value"),
                  pokemon: candidate.species.name,
                })
              }
            </h2>
            <p className="mt-1 font-semibold text-xs">
              {t("rankings.individual.spreads.top-spreads.level-data", {
                level: `${candidate.minimumLevel} - ${inspectedLevelCap.level}`,
                //@ts-ignore
                levelDesc: t(
                  `settings.level-caps.fields.${inspectedLevelCap.level}.description`
                ),
              })}
            </p>
            <p className="flex items-baseline gap-1 mt-1 font-semibold text-xs">
              <span>{t(`settings.iv-floor.title`)}</span>
              <span>{floor.value} -</span>
              <span>
                {
                  //@ts-ignore
                  t(`settings.iv-floor.values.${floor.value}.name`)
                }
              </span>
            </p>
            <p className="mt-1 font-semibold text-xs">
              {t("settings.ranking-metrics.ranked-by", {
                rank: t(
                  //@ts-ignore
                  `settings.ranking-metrics.fields.${rankingMetric.key}.value`
                ),
              })}
            </p>
          </>
        ) : (
          <>
            <h2 className="flex-grow font-semibold leading-none">
              {
                //@ts-ignore
                t("rankings.cpLeagues." + league.key + ".value")
              }
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
