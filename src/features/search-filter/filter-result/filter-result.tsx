import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SearchFilter } from "../schemas/search-filter-schema";

import { CopyToClipboardButton } from "./copy-to-clipboard-button";
import { useTranslations } from "next-intl";
import { ResetSearchButton } from "./reset-search-button";
import { PresetSelector } from "../presets/preset-selector";
import { useParseFilters } from "../hooks/str-parsers";
import { Switch } from "@/components/ui/switch";
import { Grid2X2, TextIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { FilterStringResult } from "./filter-string-result";
import { FilterBlocksResult } from "./filter-blocks-result";

export function FilterResult({
  result,
  reset,
}: {
  result: SearchFilter;
  reset: () => void;
}) {
  const t = useTranslations("filters");
  const parsed = useParseFilters(result);
  const [showBlocks, setShowBlocks] = useState(true);

  return (
    <Card className="w-full">
      <CardHeader className="py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 bg-popover rounded">
            <TooltipProvider
              delayDuration={300}
              disableHoverableContent={false}
            >
              <Tooltip>
                <TooltipTrigger asChild={false}>
                  <TextIcon
                    className={cn(
                      "size-6 transition duration-200",
                      !showBlocks && "text-primary"
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show result as text</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Switch checked={showBlocks} onCheckedChange={setShowBlocks} />
            <TooltipProvider
              delayDuration={300}
              disableHoverableContent={false}
            >
              <Tooltip>
                <TooltipTrigger asChild={false}>
                  <Grid2X2
                    className={cn(
                      "size-6 transition duration-200",
                      showBlocks && "text-primary"
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show block result</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-4">
            <PresetSelector />
            <CopyToClipboardButton text={parsed} />
            <ResetSearchButton reset={reset} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {showBlocks ? (
          "<FilterBlocksResult result={result} />"
        ) : (
          <FilterStringResult parsed={parsed} />
        )}
      </CardContent>
    </Card>
  );
}
