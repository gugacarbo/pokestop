import { LeagueCPCap } from "@/@types/league";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LEAGUES } from "@/data/league";
import { useTranslations } from "next-intl";

function CpLeagueSelector({
  league,
  setLeague,
}: {
  league: LeagueCPCap;
  setLeague: (league: LeagueCPCap) => void;
}) {
  const t = useTranslations("rankings");

  return (
    <Label>
      <span className="text-gray-500 text-xs dark:text-gray-400">
        {t("league.title")}
      </span>
      <Select
        onValueChange={(val) => setLeague(Number(val) as LeagueCPCap)}
        value={String(league)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select League" />
        </SelectTrigger>
        <SelectContent>
          {LEAGUES.map((league) => (
            <SelectItem key={league.cp} value={String(league.cp)}>
              {t(`cpLeagues.${league.key}.value`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
}

export { CpLeagueSelector };
