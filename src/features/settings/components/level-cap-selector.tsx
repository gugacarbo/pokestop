import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import useSettings, { Settings, SettingsActionTypes } from "../use-settings";
import { OUTPUT_DATA } from "@/data/outputData";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { LEVEL_CAPS } from "@/data/levelCap";

function LevelCapSelector({
  className,
}: {
  columnsNames?: Record<string, string>;
  className?: string;
}) {
  const { settings, dispatch } = useSettings();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn("", className)}>
          <ChevronDown className="mr-2 size-4" />
          Level Caps
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Show/Hide</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LEVEL_CAPS.map((levelCap, i) => {
          return (
            <DropdownMenuCheckboxItem
              key={levelCap.name}
              className="normal-case"
              checked={settings.levelCaps?.[levelCap.level]}
              onCheckedChange={(value) => {
                dispatch({
                  type: SettingsActionTypes.LevelCap,
                  payload: { key: levelCap.level, value },
                });
              }}
            >
              <TooltipProvider
                delayDuration={300}
                disableHoverableContent={false}
              >
                <Tooltip>
                  <TooltipTrigger asChild={false}>
                    {levelCap.name}
                  </TooltipTrigger>
                  <TooltipContent hidden={!levelCap.description}>
                    <p>{levelCap.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export {LevelCapSelector}