import { HeaderContext } from "@tanstack/react-table";
import SortButton from "../cells/sort-button";
import { PercentIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function PercentOfFirstHeader<T, V>({ column }: HeaderContext<T, V>) {
  const t = useTranslations();

  return (
    <TooltipProvider delayDuration={400} disableHoverableContent={true}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          {SortButton({
            label: (sorted) => (
              <div className="flex items-end gap-0.5">
                <span className="flex items-start leading-none">
                  <b className="text-base leading-none">1</b>
                  <b className="text-xs leading-none">
                    {t("main.numbers.ordinal-symbol", { num: 1 })}
                  </b>
                </span>
                <PercentIcon strokeWidth={2} className={cn("size-4")} />
              </div>
            ),
            position: "center",
            column,
          })}
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <p>{t("settings.output-data.fields.percent.description")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { PercentOfFirstHeader };
