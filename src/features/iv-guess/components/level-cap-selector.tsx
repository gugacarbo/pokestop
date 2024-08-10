import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LEVEL_CAPS, LevelCapNumber } from "@/data/levelCap";

function LevelCapSelector({
  levelCap,
  setLevelCap,
}: {
  levelCap: LevelCapNumber;
  setLevelCap: (levelCap: LevelCapNumber) => void;
}) {
  return (
    <Label>
      <span className="text-gray-500 text-xs dark:text-gray-400">
        Level Cap
      </span>

      <Select
        onValueChange={(value) => setLevelCap(Number(value) as LevelCapNumber)}
        value={String(levelCap)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select League" />
        </SelectTrigger>
        <SelectContent>
          {LEVEL_CAPS.map((levelCap) => (
            <SelectItem key={levelCap.name} value={String(levelCap.level)}>
              {levelCap.level} ({levelCap.description})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
}

export { LevelCapSelector };
