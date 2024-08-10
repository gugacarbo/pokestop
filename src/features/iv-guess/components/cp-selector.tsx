import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function CpSelector({
  setCp,
  cp,
  league,
  anyCp,
  setAnyCp,
}: {
  setCp: (cp: number) => void;
  cp: number;
  league: number;
  anyCp: boolean;
  setAnyCp: (any: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-end gap-2">
      <Label>
        <span className="text-gray-500 text-xs dark:text-gray-400">CP</span>
        <Input
          onChange={(evt) => {
            const value = Number(evt.target.value);
            if (!Number.isNaN(value)) {
              setCp(value);
            }
          }}
          defaultValue={cp}
          max={league}
          type="number"
          disabled={anyCp}
        />
      </Label>

      <Label className="flex justify-start items-center gap-x-2">
        <span className="text-gray-500 text-xs dark:text-gray-400">Any CP</span>
        <Checkbox
          onCheckedChange={(checked) => setAnyCp(checked === true)}
          checked={anyCp}
        />
      </Label>
    </div>
  );
}

export { CpSelector };
