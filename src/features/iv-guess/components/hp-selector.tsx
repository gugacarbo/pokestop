import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function HpSelector({
  setHp,
  hp,
  league,
  anyHp,
  setAnyHp,
}: {
  setHp: (hp: number) => void;
  hp: number;
  league: number;
  anyHp: boolean;
  setAnyHp: (any: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-end gap-2">
      <Label>
        <span className="text-gray-500 text-xs dark:text-gray-400">
          HP Stat
        </span>
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
        />
      </Label>
      <Label className="flex justify-start items-center gap-x-2">
        <span className="text-gray-500 text-xs dark:text-gray-400">Any HP</span>
        <Checkbox
          onCheckedChange={(checked) => setAnyHp(checked === true)}
          checked={anyHp}
        />
      </Label>
    </div>
  );
}

export { HpSelector };
