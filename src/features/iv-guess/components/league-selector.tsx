import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeagueCPCap, LEAGUES } from "@/data/league";

function LeagueSelector({
  league,
  setLeague,
}: {
  league: LeagueCPCap;
  setLeague: (league: LeagueCPCap) => void;
}) {
  return (
    <Label>
      <span className="text-gray-500 text-xs dark:text-gray-400">League</span>
      <Select
        onValueChange={(val) => setLeague(Number(val) as LeagueCPCap)}
        value={String(league)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select League" />
        </SelectTrigger>
        <SelectContent>
          {LEAGUES.map((league) => (
            <SelectItem key={league.key} value={String(league.cp)}>
              {league.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Label>
  );
}

export { LeagueSelector };
