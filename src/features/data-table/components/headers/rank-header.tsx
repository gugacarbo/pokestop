import { HeaderContext } from "@tanstack/react-table";
import SortButton from "../cells/sort-button";
import { TrophyIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function RankHeader<T, V>({ column }: HeaderContext<T, V>) {
  const t = useTranslations("settings");

  return (
    <TooltipProvider delayDuration={400} disableHoverableContent={true}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          {SortButton({
            label: (sorted) => (
              <TrophyIcon
                className={cn(
                  "size-5",
                  sorted ? "text-amber-500  shadow-white" : ""
                )}
              />
            ),
            position: "left",
            column,
          })}
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <p>{t("output-data.fields.rank.description")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { RankHeader };
