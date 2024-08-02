"use client";

import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { firstUpper } from "@/lib/text";
import { CopyIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function CopyToClipboardButton({ text }: { text: string }) {
  const t = useTranslations("filters");

  const [showDone, setShowDone] = useState<null | NodeJS.Timeout>(null);

  const copylink = () => {
    if (!showDone) {
      const t = setTimeout(() => {
        setShowDone(null);
      }, 1500);
      setShowDone(t);
    }
    navigator.clipboard.writeText(text);
  };

  return (
    <TooltipProvider delayDuration={300} disableHoverableContent>
      <Tooltip open={showDone ? true : undefined}>
        <TooltipTrigger asChild>
          <Button onClick={copylink} size="icon">
            <CopyIcon className="size-5" strokeWidth={2.5} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <p>{firstUpper(t(showDone ? "copied" : "copy-to-clipboard"))}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
