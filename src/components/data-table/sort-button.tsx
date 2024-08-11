import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import {
  ArrowDown01,
  ArrowDownAZ,
  ArrowUp10,
  ArrowUpZA,
  ArrowUpDown,
} from "lucide-react";
import React from "react";

function SortButton<T>({
  label,
  column,
  position = "left",
  iconType = "number",
  className: cln,
}: {
  label: string | React.ReactNode | ((sorted: boolean) => React.ReactNode);
  column: Column<T>;
  position?: "center" | "right" | "left";
  iconType?: "number" | "string";
  className?: string;
}) {
  const UpIcon = iconType === "number" ? ArrowUp10 : ArrowUpZA;
  const DownIcon = iconType === "number" ? ArrowDown01 : ArrowDownAZ;

  const isSorted = column.getIsSorted();

  const SortIcon = ({ className }: { className?: string }) => {
    if (isSorted === "asc") {
      return <DownIcon className={className} />;
    }
    if (isSorted === "desc") {
      return <UpIcon className={className} />;
    }
    return <ArrowUpDown className={className} />;
  };
  return (
    <div
      className={cn(
        position === "center" && "text-center",
        position === "right" && "text-right"
      )}
    >
      <Button
        variant={isSorted ? "default" : "ghost"}
        onClick={() => column.toggleSorting(isSorted === "asc")}
        className={cn("h-auto py-1 leading-tight ", cln)}
        size="sm"
      >
        <span>
          {typeof label === "function" ? label(!(isSorted === false)) : label}
        </span>
        <SortIcon
          className={cn(
            "ml-2 size-4 md:size-5"
            // isSorted && " stroke-primary"
          )}
        />
      </Button>
    </div>
  );
}

export default SortButton;
