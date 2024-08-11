import React, { FC } from "react";

import { useLeague } from "@/hooks/useLeague";
import { Provider as LeagueCandidateRankedSpreadsProvider } from "@/hooks/useRankedSpreads";

import CandidateLeagueTopSpreadsAtLevelCap from "../CandidateLeagueTopSpreadsAtLevelCap";
import CandidateLeagueRanked from "../CandidateLeagueRanked";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CandidateLeagueContent: FC = () => {
  const { inspectedLevelCap, ...league } = useLeague();

  return (
    <LeagueCandidateRankedSpreadsProvider>
      <Accordion
        type="single"
        collapsible
        value={league.collapsed.value ? undefined : "item-1"}
      >
        <AccordionItem value="item-1">
          <AccordionContent className="pb-0">
            {inspectedLevelCap !== null ? (
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

export default CandidateLeagueContent;
