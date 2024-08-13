"use client";

import { ChevronDown } from "lucide-react";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LEVEL_CAPS } from "@/data/levelCap";

import { useSettings, SettingsActionTypes } from "../use-settings";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

function LevelCapSelector({
  className,
}: {
  columnsNames?: Record<string, string>;
  className?: string;
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
                    {
                      // @ts-ignore
                      t(`level-caps.fields.${levelCap.level}.value`)
                    }
                  </TooltipTrigger>
                  <TooltipContent
                    hidden={
                      // @ts-ignore
                      !t(`level-caps.fields.${levelCap.level}.description`)
                    }
                  >
                    <p>
                      {
                        // @ts-ignore
                        t(`level-caps.fields.${levelCap.level}.description`)
                      }
                    </p>
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
