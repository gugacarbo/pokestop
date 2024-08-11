"use client";
import React, { FC } from "react";
import { LEAGUES } from "@/data/league";
import { Provider as CandidateContextProvider } from "@/hooks/useCandidate";
import { useSettings } from "@/hooks/use-settings";

import CandidateLeague from "@/components/go-iv/candidate-league/CandidateLeague";
import CandidateBuilder from "@/components/go-iv/candidate-builder/CandidateBuilder";

const CandidatePage: FC<{
  //  cachedCandidate: Candidate | null
}> = ({}) => {
  const { settings } = useSettings();

  return (
    <CandidateContextProvider cachedCandidate={null}>
      <CandidateBuilder />
      <section
        className={`grid items-start w-full grid-cols-1 gap-4 mb-4 sm:mb-8 sm:gap-8${
          settings.layout === "grid" ? " lg:grid-cols-2" : ""
        }`}
      >
        {LEAGUES.filter((league) => settings.leagues[league.key] === true)
          .sort(
            (a, b) =>
              settings.leagueOrder.indexOf(a.key) -
              settings.leagueOrder.indexOf(b.key)
          )
          .map((league) => (
            <CandidateLeague key={league.key} league={league} />
          ))}
      </section>
    </CandidateContextProvider>
  );
};

export default CandidatePage;

// export const getServerSideProps = async (
//   ctx: NextPageContext
//   // eslint-disable-next-line @typescript-eslint/require-await
// ): Promise<{ props: { cachedCandidate: Candidate | null } }> => {
//   try {
//     const cookies = parseCookies(ctx);
//     const cachedCandidate = JSON.parse(cookies.candidate) as Candidate;

//     return { props: { cachedCandidate } };
//   } catch (err) {
//     return { props: { cachedCandidate: null } };
//   }
// };
