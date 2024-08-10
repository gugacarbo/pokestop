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
  label: string | React.ReactNode;
  column: Column<T>;
  position?: "center" | "right" | "left";
  iconType?: "number" | "string";
  className?: string;
}) {
  const UpIcon = iconType === "number" ? ArrowUp10 : ArrowUpZA;
  const DownIcon = iconType === "number" ? ArrowDown01 : ArrowDownAZ;

  const SortIcon = ({ className }: { className?: string }) => {
    if (column.getIsSorted() === "asc") {
      return <DownIcon className={className} />;
    }
    if (column.getIsSorted() === "desc") {
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
        variant={column.getIsSorted() ? "default" : "ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className={cn("h-auto py-1 leading-tight ", cln)}
        size="sm"
      >
        <span className="">{label}</span>
        <SortIcon
          className={cn(
            "ml-2 size-4 md:size-5"
            // column.getIsSorted() && " stroke-primary"
          )}
        />
      </Button>
    </div>
  );
}

export default SortButton;
