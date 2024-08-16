"use client";

import { useEffect, useState } from "react";
import { IV_FLOORS } from "@/@types/iv-floor";
import { RANKABLE_METRICS } from "@/@types/stat";

import { useCandidate } from "@/features/candidate/use-candidate";
import { useSettings } from "@/features/settings/use-settings";
import SpeciesTypeIcons from "@/features/_pokemon/components/SpeciesTypeIcons";
import { PencilIcon } from "lucide-react";

function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
}

export function CandidateBuilderStickyHeader() {
  const { candidate } = useCandidate();
  const { settings } = useSettings();

  const isScrolled = useIsScrolled();
  if (!isScrolled) return null;

  const rankingMetric = RANKABLE_METRICS.find(
    (metric) => metric.key === candidate.rankingMetric
  );
  if (rankingMetric === undefined) {
    throw new Error("No matching ranking metric could be found.");
  }

  const floor = IV_FLOORS.find((floor) => floor === candidate.floor);
  if (floor === undefined) {
    throw new Error("No matching IV floor could be found.");
  }

  return (
    <div className="top-0 z-10 fixed inset-x-0 flex justify-start items-center space-y-0.5 border-gray-100 dark:border-gray-700 sm:hidden bg-white dark:bg-gray-800 px-4 border-b h-14">
      <div className="text-gray-700 dark:text-gray-100 grow">
        <p className="font-title text-gray-700 text-xs dark:text-gray-100">
          <span className="inline-flex mr-2">
            <SpeciesTypeIcons types={candidate.species.types} />
          </span>
          {candidate.species.name}, {candidate.ivs.atk}-{candidate.ivs.def}-
          {candidate.ivs.sta}{" "}
        </p>
        <p className="text-[10px] text-muted-foreground">
          Ranked by {rankingMetric.name}, Min. IV {floor} ({floor})
          {settings.showMinimumLevel &&
            `, Min. Level ${candidate.minimumLevel}`}
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-1 rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800"
      >
        <PencilIcon
          className="w-5 h-5 text-gray-600 dark:text-gray-300"
          aria-hidden
        />

        <span className="sr-only">Edit Candidate</span>
      </button>
    </div>
  );
}
