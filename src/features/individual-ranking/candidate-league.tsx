import React, { FC } from "react";

import { League } from "@/data/league";
import { Provider as LeagueContextProvider } from "@/features/individual-ranking/hooks/useLeague";

import { CandidateLeagueHeader } from "./components/candidate-league-header";
import { CandidateLeagueContent } from "./candidate-league-content";

import { Card } from "@/components/ui/card";

function CandidateLeague({ league }: { league: League }) {
  return (
    <LeagueContextProvider league={league}>
      <Card className="overflow-hidden">
        <CandidateLeagueHeader />
        <CandidateLeagueContent />
      </Card>
    </LeagueContextProvider>
  );
}

export { CandidateLeague };
