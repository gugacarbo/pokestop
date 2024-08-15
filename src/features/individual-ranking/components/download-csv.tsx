import React, { FC } from "react";

import { useRankedSpreads } from "@/features/individual-ranking/hooks/useRankedSpreads";
import { useLeague } from "@/features/individual-ranking/hooks/useLeague";
import { useCandidate } from "@/features/candidate/use-candidate";

import { downloadFile } from "@/utils/downloadFile";
import { xlCount } from "@/lib/xlCount";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const CandidateLeagueTopSpreadsAtLevelCapDownload: FC = () => {
  const { candidate } = useCandidate();
  const { league, inspectedLevelCap } = useLeague();
  const rankedSpreads = useRankedSpreads();

  const t = useTranslations("main.common");

  if (inspectedLevelCap === null) {
    throw new Error("A level cap must be inspected to export");
  }

  function exportToCSV() {
    if (inspectedLevelCap === null) {
      throw new Error("A level cap must be inspected to export");
    }

    const fileName = `${candidate.species.id}-${league.cp}-${inspectedLevelCap.level}-${candidate.floor}-${candidate.rankingMetric}.csv`;

    const csvContent = rankedSpreads[inspectedLevelCap.level].reduce(
      (output, spread) =>
        output.concat(
          `\n${spread.rank},${spread.ivs.atk},${spread.ivs.def},${
            spread.ivs.sta
          },${spread.level},${spread.cp},${xlCount(spread.level)},${
            spread.stats.atk.value
          },${spread.stats.def.value},${spread.stats.sta.value},${
            spread.product.value
          },${spread.bulkProduct.value}`
        ),
      "Rank,Atk IV,Def IV,Sta IV,Level,CP,XL,Attack,Defense,Stamina,Stat Product,Bulk Product"
    );

    downloadFile(fileName, "text/csv", csvContent);
  }

  return (
    <Button onClick={exportToCSV} variant="outline">
      <span className="mr-2 font-semibold text-xs">
        {t("export")} {rankedSpreads[inspectedLevelCap.level].length} {t("to")}{" "}
        CSV
      </span>
      <DownloadIcon className="size-4" />
    </Button>
  );
};

export default CandidateLeagueTopSpreadsAtLevelCapDownload;
