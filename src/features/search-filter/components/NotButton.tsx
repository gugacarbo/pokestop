import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

function NotButton({
  onClick,
  value,
  disabled,
}: {
  onClick: () => void;
  value: boolean | null | number | undefined;
  disabled?: boolean;
}) {
  const t = useTranslations("filters");

  return (
    <TooltipProvider delayDuration={300} disableHoverableContent={true}>
      <Tooltip>
        <TooltipTrigger asChild={true}>
          <Button
            size="xs"
            variant={!disabled ? "secondary" : "outline"}
            onClick={onClick}
            disabled={disabled}
            className={cn(!disabled && !!value ? "border-red-600" : "")}
          >
            <b
              className={cn(
                "text-base",
                !disabled ? !!value && "text-red-600" : "text-muted-foreground"
              )}
            >
              !
            </b>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <span>{t("invert-filter.title")}</span>
          <p></p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export { NotButton };
