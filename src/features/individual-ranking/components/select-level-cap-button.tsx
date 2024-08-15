import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LevelCap } from "@/@types/level-cap";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { League } from "@/@types/league";

function SelectLevelCapButton({
  league,
  levelCap,
  setInspectedLevelCap,
  minimumLevel,
  species_name,
}: {
  league: League["key"];
  species_name: string;
  minimumLevel: number;
  levelCap: LevelCap | null;
  setInspectedLevelCap: (levelCap: LevelCap | null) => void;
}) {
  const t = useTranslations("rankings");

  return (
    <TooltipProvider delayDuration={400} disableHoverableContent={false}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          <Button
            variant="outline"
            size="sm-icon"
            className="size-8"
            onClick={() => setInspectedLevelCap(levelCap)}
          >
            <MenuIcon className="text-muted-foreground size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          {t("individual.level-cap.description", {
            league: t(`cpLeagues.${league}.value`),
            minimumLevel,
            levelCap: String(levelCap),
            name: species_name,
          })}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { SelectLevelCapButton };
