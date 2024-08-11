import { Button } from "@/components/ui/button";
import { AlignHorizontalSpaceAroundIcon, Equal } from "lucide-react";
import LessThan from "@/assets/less-than-equal.svg";
import GreaterThan from "@/assets/greater-than-equal.svg";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";
import { CompareModes } from "@/@types/compare-modes";

export function ToggleCompareModes({
  mode,
  onModeChange,
  disabled,
  value,
  allowInterval = false,
  max = null,
  min = 0,
}: {
  mode: CompareModes;
  onModeChange: (mode: CompareModes) => void;
  disabled?: boolean;
  value: number;
  allowInterval?: boolean;
  max?: number | null;
  min?: number;
}) {
  const icon = (mode: CompareModes) => {
    switch (mode) {
      case "eq":
        return <Equal className="size-5" />;
      case "gt":
        return <GreaterThan className="fill-foreground size-3" />;
      case "lt":
        return <LessThan className="fill-foreground size-3" />;
      case "int":
        return (
          <AlignHorizontalSpaceAroundIcon className="fill-foreground size-3" />
        );
      default:
        return null;
    }
  };

  const t = useTranslations("filters.buttons");

  const nameMap = {
    eq: t("equal.description"),
    gt: t("less-than.description"),
    lt: t("greater-than.description"),
    int: t("interval.description"),
    any: t("any.description"),
  };

  return (
    <TooltipProvider delayDuration={300} disableHoverableContent={false}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          <Button
            variant="outline"
            disabled={disabled}
            size="xs"
            onClick={() => {
              switch (mode) {
                case "eq":
                  onModeChange(
                    max !== null && value === (max ?? 4) ? "lt" : "gt"
                  );
                  break;
                case "gt":
                  onModeChange(
                    value > min ? "lt" : allowInterval ? "int" : "eq"
                  );
                  break;
                case "lt":
                  onModeChange(allowInterval ? "int" : "eq");
                  break;
                case "int":
                  onModeChange("eq");
                  break;
              }
            }}
          >
            {icon(mode)}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{nameMap[mode]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
