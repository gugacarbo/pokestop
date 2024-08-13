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

export function DataOutputSelector({
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
          Output Fields
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Show/Hide columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {OUTPUT_DATA.map((outData, i) => {
          return (
            <DropdownMenuCheckboxItem
              key={outData.key}
              className="normal-case"
              checked={settings.outputData?.[outData.key]}
              onCheckedChange={(value) => {
                dispatch({
                  type: SettingsActionTypes.OutputData,
                  payload: {
                    key: outData.key,
                    value,
                  },
                });
              }}
            >
              <TooltipProvider
                delayDuration={300}
                disableHoverableContent={false}
                
              >
                <Tooltip >
                  <TooltipTrigger 
                    asChild={false}
                  >
                    {outData.name}
                  </TooltipTrigger>
                  <TooltipContent hidden={!outData.description}>
                    <p>{outData.description}</p>
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
