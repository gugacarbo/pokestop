import React, { FC } from "react";

import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { Provider as LeagueCandidateRankedSpreadsProvider } from "@/hooks/useRankedSpreads";

import CandidateLeagueRanked from "./candidate-league-ranked";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import { CandidateLeagueTopSpreadsAtLevelCap } from "./league-ranked-at-level-cap/top-spreads-at-level-cap";

const CandidateLeagueContent: FC = () => {
  const { inspectedLevelCap, ...league } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      <Accordion
        type="single"
        collapsible
        value={league.collapsed.value ? undefined : league.league.name}
        className="space-y-0 pb-0"
      >
        <AccordionItem value={league.league.name} className="space-y-0 mb-0">
          <AccordionContent className="space-y-0 mb-0 pb-0">
            {inspectedLevelCap ? (
              <CandidateLeagueTopSpreadsAtLevelCap />
            ) : (
              <CandidateLeagueRanked />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </LeagueCandidateRankedSpreadsProvider>
  );
};

export { CandidateLeagueContent };
