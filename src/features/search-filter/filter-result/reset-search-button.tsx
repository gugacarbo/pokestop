"use client";

import { Button } from "@/components/ui/button";

import { firstUpper } from "@/lib/text";
import { Trash2Icon } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function ResetSearchButton({ reset }: { reset: () => void }) {
  const t = useTranslations();

  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={(o) => setOpen(o)}>
      <PopoverTrigger asChild>
        <Button variant="destructive" size="icon" type="button">
          <Trash2Icon className="size-5" strokeWidth={2.5} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 w-auto min-w-0 text-sm">
        <span>{t("filters.reset-description")}</span>
        <Button
          onClick={() => {
            reset();
            setOpen(false);
          }}
          type="button"
          variant="destructive"
          size="sm"
        >
          {firstUpper(t("main.common.confirm"))}
        </Button>
      </PopoverContent>
    </Popover>
  );
}
