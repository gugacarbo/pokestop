import { IvFilterMode } from "../../schemas/search-filter-schema";

import { Button } from "@/components/ui/button";
import { Equal } from "lucide-react";
import LessThan from "@/assets/less-than-equal.svg";
import GreaterThan from "@/assets/greater-than-equal.svg";

export function ToggleFilterMode({
  mode,
  onModeChange,
  disabled,
  value,
}: {
  mode: IvFilterMode;
  onModeChange: (mode: IvFilterMode) => void;
  disabled?: boolean;
  value: number;
}) {
  const icon = (mode: IvFilterMode) => {
    switch (mode) {
      case "eq":
        return <Equal className="size-5" />;
      case "gt":
        return <GreaterThan className="fill-foreground size-3" />;
      case "lt":
        return <LessThan className="fill-foreground size-3" />;
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
            onModeChange(value === 4 ? "lt" : "gt");
            break;
          case "gt":
            onModeChange(value > 0 ? "lt" : "eq");
            break;
          case "lt":
            onModeChange("eq");
            break;
        }
      }}
    >
      {icon(mode)}
    </Button>
  );
}
