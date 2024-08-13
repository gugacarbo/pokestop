import {
  CandidateBuilderStickyHeader,
  CandidateBuilderIVs,
  CandidateBuilderIVFloor,
  CandidateBuilderSpecies,
  CandidateBuilderFamilySwap,
  CandidateBuilderMinimumLevel,
  CandidateBuilderRankingMetric,
} from "./components";

function CandidateBuilder({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <CandidateBuilderStickyHeader />
      <section className="flex flex-wrap justify-start items-start gap-x-4 gap-y-2 mb-2 px-4 sm:px-0 w-full">
        <CandidateBuilderSpecies />
        <CandidateBuilderIVs />
        <CandidateBuilderIVFloor />
        {children}
        <CandidateBuilderRankingMetric />
        <CandidateBuilderMinimumLevel />
        <CandidateBuilderFamilySwap />
      </section>
    </>
  );
}

export { CandidateBuilder };
