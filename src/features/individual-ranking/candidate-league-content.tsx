import React, { FC } from "react";

import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { Provider as LeagueCandidateRankedSpreadsProvider } from "@/features/individual-ranking/hooks/useRankedSpreads";

import CandidateLeagueRanked from "./candidate-league-ranked";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

import { CandidateLeagueTopSpreadsAtLevelCap } from "./top-spreads-at-level-cap";

const CandidateLeagueContent: FC = () => {
  const { inspectedLevelCap, ...league } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      <Accordion
        type="single"
        collapsible
        value={league.collapsed.value ? undefined : league.league.key}
        className="space-y-0 pb-0"
      >
        <AccordionItem value={league.league.key} className="space-y-0 mb-0">
          <AccordionContent className="z- z-10 space-y-0 mb-0 pb-0">
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
