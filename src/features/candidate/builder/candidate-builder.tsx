import {
  CandidateBuilderStickyHeader,
  CandidateBuilderIVs,
  IvFloorSelector,
  CandidateBuilderSpecies,
  CandidateBuilderFamilySwap,
  CandidateBuilderMinimumLevel,
  CandidateBuilderRankingMetric,
} from ".";

function CandidateBuilder({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CandidateBuilderStickyHeader />
      <section className="flex flex-wrap justify-start items-start gap-x-4 gap-y-2 mb-2 px-4 sm:px-0 w-full">
        <CandidateBuilderSpecies />
        <CandidateBuilderIVs />
        <IvFloorSelector />
        {children}
        <CandidateBuilderRankingMetric />
        <CandidateBuilderMinimumLevel />
        <CandidateBuilderFamilySwap />
      </section>
    </>
  );
}

export { CandidateBuilder };
