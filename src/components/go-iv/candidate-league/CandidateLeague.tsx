import React, { FC } from "react";

import { League } from "@/data/league";
import { Provider as LeagueContextProvider } from "@/hooks/useLeague";

import CandidateLeagueHeader from "./CandidateLeagueHeader";
import CandidateLeagueContent from "./CandidateLeagueContent";
import { Card } from "../../ui/card";

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
