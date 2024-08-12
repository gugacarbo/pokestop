import React, { FC } from "react";

import { League } from "@/data/league";
import { Provider as LeagueContextProvider } from "@/hooks/useLeague";

import { CandidateLeagueHeader } from "./components/candidate-league-header";
import { CandidateLeagueContent } from "./candidate-league-content";

import { Card } from "@/components/ui/card";

const CandidateLeague: FC<{ league: League }> = ({ league }) => {
  return (
    <LeagueContextProvider league={league}>
      <Card className="overflow-hidden">
        <CandidateLeagueHeader />
        <CandidateLeagueContent />
      </Card>
    </LeagueContextProvider>
  );
};

export default CandidateLeague;
