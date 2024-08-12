import React, { FC } from "react";

import { CandidateBuilderStickyHeader } from "./components/candidate-builder-sticky-header";
import CandidateBuilderSpecies from "./CandidateBuilderSpecies";
import CandidateBuilderFamilySwap from "./CandidateBuilderFamilySwap";
import CandidateBuilderIVs from "./CandidateBuilderIVs";
import CandidateBuilderIVFloor from "./CandidateBuilderIVFloor";
import CandidateBuilderMinimumLevel from "./CandidateBuilderMinimumLevel";
import CandidateBuilderRankingMetric from "./CandidateBuilderRankingMetric";

function CandidateBuilder() {
  return (
    <>
      <CandidateBuilderStickyHeader />
      <section className="flex flex-wrap justify-start items-start gap-x-4 gap-y-2 mb-2 px-4 sm:px-0 w-full">
        <CandidateBuilderSpecies />
        <CandidateBuilderIVs />
        <CandidateBuilderIVFloor />
        <CandidateBuilderRankingMetric />
        <CandidateBuilderMinimumLevel />
        <CandidateBuilderFamilySwap />
      </section>
    </>
  );
}

export { CandidateBuilder };
