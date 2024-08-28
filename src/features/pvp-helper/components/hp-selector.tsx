import { CompareModes } from "@/@types/compare-modes";
import { ToggleCompareModes } from "@/components/toggle-compare-mode";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function HpSelector({
  setHp,
  hp,
  anyHp,
  setAnyHp,
  mode,
  onModeChange,
}: {
  setHp: (hp: number) => void;
  hp: number;
  anyHp: boolean;
  setAnyHp: (any: boolean) => void;
  mode: CompareModes;
  onModeChange: (mode: CompareModes) => void;
}) {
  return (
    <div className="flex flex-col items-end gap-2">
      <Label>
        <span className="text-muted-foreground text-xs">HP Stat</span>
        <div className="flex items-center gap-x-2">
          <ToggleCompareModes
            mode={mode}
            onModeChange={onModeChange}
            disabled={anyHp}
            value={hp}
          />
          <Input
            onChange={(evt) => {
              const value = Number(evt.target.value);
              if (!Number.isNaN(value)) {
                setHp(value);
              }
            }}
            defaultValue={hp}
            type="number"
            disabled={anyHp}
            className="flex-1"
          />
          <div className="flex flex-col items-center leading-none">
            <Checkbox
              onCheckedChange={(checked) => setAnyHp(checked === true)}
              checked={anyHp}
            />
            <small className="font-medium text-muted-foreground text-xs truncate">
              Any HP
            </small>
          </div>
        </div>
      </Label>
    </div>
  );
}

export { HpSelector };
