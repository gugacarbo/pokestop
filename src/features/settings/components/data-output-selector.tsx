"use client";

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
import { useSettings, Settings, SettingsActionTypes } from "../use-settings";
import { OUTPUT_DATA } from "@/data/outputData";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

export function DataOutputSelector({
  className,
}: {
  columnsNames?: Record<string, string>;
  className?: string;
}) {
  const { settings, dispatch } = useSettings();
  const t = useTranslations("settings");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Label className="flex flex-col">
          <span className="text-muted-foreground text-xs">
            {t("output-data.title")}
          </span>

          <Button variant="outline" className={cn("", className)}>
            <ChevronDown className="mr-2 size-5" />
            {t("common.show-hide")}
          </Button>
        </Label>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="">
        <DropdownMenuLabel>{t("common.show-hide")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {OUTPUT_DATA.map((outData, i) => {
          // @ts-ignore
          const description = !t(
            `output-data.fields.${outData.key}.description`
          );

          // @ts-ignore
          const value = t(`output-data.fields.${outData.key}.value`);
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
                <Tooltip>
                  <TooltipTrigger asChild={false}>{value}</TooltipTrigger>
                  <TooltipContent hidden={!description}>
                    <p>{description}</p>
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
