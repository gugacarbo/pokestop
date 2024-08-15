import { LevelCap } from "@/@types/level-cap";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { LEVEL_CAPS } from "@/@types/level-cap";

function SingleLevelCapSelector({
  levelCap,
  setLevelCap,
}: {
  levelCap: LevelCap;
  setLevelCap: (levelCap: LevelCap) => void;
}) {
  const t = useTranslations("settings");
  return (
    <Label>
      <span className="text-muted-foreground text-xs">
        {t("level-caps.title")}
      </span>
      <Select
        onValueChange={(value) => setLevelCap(Number(value) as LevelCap)}
        value={String(levelCap)}
      >
        <SelectTrigger>
          <SelectValue placeholder={`${t("level-caps.placeholder")}`} />
        </SelectTrigger>
        <SelectContent>
          {LEVEL_CAPS.map((levelCap) => (
            <SelectItem key={levelCap} value={String(levelCap)}>
              {t(`level-caps.fields.${levelCap}.value`)} -{" "}
              {t(`level-caps.fields.${levelCap}.description`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
}

export { SingleLevelCapSelector };
