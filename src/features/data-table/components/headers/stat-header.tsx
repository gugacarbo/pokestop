import { HeaderContext } from "@tanstack/react-table";
import SortButton from "../cells/sort-button";
import { SwordsIcon, CrossIcon, ShieldIcon,CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function StatHeader<T, V>({ column }: HeaderContext<T, V>) {
  const t = useTranslations("settings");
  const columnId = column.id.replace("_", ".");

  const icon = (sorted: boolean) => {
    switch (columnId) {
      case "stats.sta":
        return (
          <CrossIcon
            className={cn("size-5", sorted ? "text-red-600 fill-red-600" : "")}
          />
        );
      case "stats.atk":
        return (
          <SwordsIcon
            className={cn(
              "size-5",
              sorted ? "text-orange-600  shadow-white" : ""
            )}
          />
        );
      case "stats.def":
        return (
          <ShieldIcon
            className={cn(
              "size-5",
              sorted ? "text-sky-600/80 fill-blue-600 shadow-white" : ""
            )}
          />
        );
      default:
        return (
          <CircleHelp
            className={cn(
              "size-5",
              sorted ? "text-amber-500  shadow-white" : ""
            )}
          />
        );
    }
  };
  return (
    <TooltipProvider delayDuration={400} disableHoverableContent={true}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          {SortButton({
            label: icon,
            position: "left",
            column,
          })}
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          {
            // @ts-ignore
            <p>{t(`${columnId}.value`)}</p>
          }
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { StatHeader };
