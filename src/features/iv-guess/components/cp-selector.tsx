import { CompareModes } from "@/@types/compare-modes";

import { ToggleCompareModes } from "@/components/toggle-compare-mode";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CpSelector({
  setCp,
  cp,
  league,
  anyCp,
  setAnyCp,
  mode,
  onModeChange,
}: {
  setCp: (cp: number) => void;
  cp: number;
  league: number;
  anyCp: boolean;
  setAnyCp: (any: boolean) => void;
  mode: CompareModes;
  onModeChange: (mode: CompareModes) => void;
}) {
  return (
    <Label className="flex flex-col w-full">
      <span className="text-muted-foreground text-xs">CP</span>
      <div className="flex items-center gap-2">
        <ToggleCompareModes
          mode={mode}
          onModeChange={onModeChange}
          disabled={anyCp}
          value={cp}
        />
        <Input
          onChange={(evt) => {
            const value = Number(evt.target.value);
            if (!Number.isNaN(value)) {
              setCp(value);
            }
          }}
          className="flex-1"
          defaultValue={cp}
          max={league}
          type="number"
          disabled={anyCp}
        />
        <Label className="flex flex-col justify-center items-center gap-x-2 leading-none">
          <Checkbox
            onCheckedChange={(checked) => setAnyCp(checked === true)}
            checked={anyCp}
          />
          <span className="text-muted-foreground text-xs truncate">Any CP</span>
        </Label>
      </div>
    </Label>
  );
}

export { CpSelector };
