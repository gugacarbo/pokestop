import { CardHeader } from "@/components/ui/card";
import { MinMaxDisplay } from "./min-max-display";
import { RankedSpread } from "@/lib/useGenerateRankedSpreads";
import { ShieldIcon, SwordsIcon } from "lucide-react";

function ChartHeader({
  extremeStats,
}: {
  extremeStats?: {
    atk: {
      min?: RankedSpread;
      max?: RankedSpread;
    };
    def: {
      min?: RankedSpread;
      max?: RankedSpread;
    };
  };
}) {
  return (
    <CardHeader className="flex flex-row justify-evenly items-center gap-6 space-y-0 w-full">
      <MinMaxDisplay
        min={extremeStats?.atk?.min?.stats.atk.value}
        max={extremeStats?.atk?.max?.stats.atk.value}
        title="Attack"
        icon={<SwordsIcon className="size-6" />}
      />

      <MinMaxDisplay
        min={extremeStats?.def?.min?.stats.def.value}
        max={extremeStats?.def?.max?.stats.def.value}
        title="Defense"
        icon={<ShieldIcon className="size-6" />}
      />
    </CardHeader>
  );
}

export { ChartHeader };
