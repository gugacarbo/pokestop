"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { LEVEL_CAPS } from "@/@types/level-cap";

import {
  useSettings,
  SettingsActionTypes,
} from "@/features/settings/use-settings";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

function LevelCapSelector({
  className,
  single,
}: {
  columnsNames?: Record<string, string>;
  className?: string;
  single?: boolean;
}) {
  const { settings, dispatch } = useSettings();
  const t = useTranslations("settings");

  const levelCaps = Object.entries(settings?.levelCaps)
    .filter(([_, v]) => v)
    .map(([levelCap]) => {
      return levelCap;
    });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Label className="flex flex-col">
          <span className="text-muted-foreground text-xs capitalize">
            {t("level-caps.title")}
          </span>
          <Button
            variant={"outline"}
            className={cn(
              "capitalize min-w-24 flex justify-start items-center text-start",
              levelCaps.length === 0 && "border-destructive",
              className
            )}
          >
            <ChevronDown
              className={cn(
                "mr-2 size-5",
                levelCaps.length === 0 && "text-destructive"
              )}
            />
            {levelCaps.join(", ") || (
              <b className="text-destructive">{t("level-caps.title")}</b>
            )}
          </Button>
        </Label>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("common.show-hide")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LEVEL_CAPS.map((levelCap, i) => {
          return (
            <DropdownMenuCheckboxItem
              key={levelCap}
              className="normal-case"
              checked={settings.levelCaps?.[levelCap]}
              onCheckedChange={(value) => {
                dispatch({
                  type: SettingsActionTypes.LevelCap,
                  payload: { key: levelCap, value },
                });
              }}
            >
              <TooltipProvider
                delayDuration={300}
                disableHoverableContent={false}
              >
                <Tooltip>
                  <TooltipTrigger asChild={false}>
                    {t(`level-caps.fields.${levelCap}.value`)}
                  </TooltipTrigger>
                  <TooltipContent
                    hidden={!t(`level-caps.fields.${levelCap}.description`)}
                  >
                    <p>{t(`level-caps.fields.${levelCap}.description`)}</p>
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

export { LevelCapSelector };
