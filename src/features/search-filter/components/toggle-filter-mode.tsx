import { RangeFilterMode } from "../schemas/search-filter-schema";

import { Button } from "@/components/ui/button";
import { AlignHorizontalSpaceAroundIcon, Equal } from "lucide-react";
import LessThan from "@/assets/less-than-equal.svg";
import GreaterThan from "@/assets/greater-than-equal.svg";

export function ToggleFilterMode({
  mode,
  onModeChange,
  disabled,
  value,
  allowInterval = false,
  max = null,
  min = 0,
}: {
  mode: RangeFilterMode;
  onModeChange: (mode: RangeFilterMode) => void;
  disabled?: boolean;
  value: number;
  allowInterval?: boolean;
  max?: number | null;
  min?: number;
}) {
  const icon = (mode: RangeFilterMode) => {
    switch (mode) {
      case "eq":
        return <Equal className="size-5" />;
      case "gt":
        return <GreaterThan className="fill-foreground size-3" />;
      case "lt":
        return <LessThan className="fill-foreground size-3" />;
      case "int":
        return (
          <AlignHorizontalSpaceAroundIcon className="fill-foreground size-3" />
        );
      default:
        return null;
    }
  };

  return (
    <Button
      variant="outline"
      disabled={disabled}
      size="xs"
      onClick={() => {
        switch (mode) {
          case "eq":
            onModeChange(max !== null && value === (max ?? 4) ? "lt" : "gt");
            break;
          case "gt":
            onModeChange(value > min ? "lt" : allowInterval ? "int" : "eq");
            break;
          case "lt":
            onModeChange(allowInterval ? "int" : "eq");
            break;
          case "int":
            onModeChange("eq");
            break;
        }
      }}
    >
      {icon(mode)}
    </Button>
  );
}
