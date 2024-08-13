"use client"

import { LEAGUES } from "@/data/league";
import { useSettings } from "@/features/settings/use-settings";
import { CandidateLeague } from "@/features/individual-ranking/candidate-league";

function CandidateIndividualRanking() {
  const { settings } = useSettings();

  return (
    <section
      className={`grid items-start w-full grid-cols-1 gap-4 mb-4 sm:mb-8 sm:gap-8${
        settings.layout === "grid" ? " lg:grid-cols-2" : ""
      }`}
    >
      {LEAGUES.filter((league) => settings?.leagues?.[league.key] === true)
        .sort(
          (a, b) =>
            settings.leagueOrder.indexOf(a.key) -
            settings.leagueOrder.indexOf(b.key)
        )
        .map((league) => (
          <CandidateLeague key={league.key} league={league} />
        ))}
    </section>
  );
}

export { CandidateIndividualRanking };
