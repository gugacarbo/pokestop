import { FC } from "react";
import { League } from "@/@types/league";
import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { ChevronsDown, ChevronsUp } from "lucide-react";

const LeaguePosition: FC<{ league: League }> = ({ league }) => {
  const { settings, dispatch } = useSettings();

  return (
    <div className="flex flex-shrink-0 justify-start items-center">
      <button
        onClick={() => {
          const currentIndex = settings.leagueOrder.indexOf(league.key);
          const newIndex = currentIndex - 1;
          const newOrder = [...settings.leagueOrder];

          [newOrder[currentIndex], newOrder[newIndex]] = [
            newOrder[newIndex],
            newOrder[currentIndex],
          ];

          dispatch({
            type: SettingsActionTypes.LeagueOrder,
            payload: newOrder,
          });
        }}
        disabled={settings.leagueOrder.indexOf(league.key) === 0}
        aria-label={`Move ${league.key} up`}
        className="p-0.5 rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 text-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
      >
        <ChevronsUp className="w-4 h-4" aria-hidden />
      </button>

      <button
        onClick={() => {
          const currentIndex = settings.leagueOrder.indexOf(league.key);
          const newIndex = currentIndex + 1;
          const newOrder = [...settings.leagueOrder];

          [newOrder[currentIndex], newOrder[newIndex]] = [
            newOrder[newIndex],
            newOrder[currentIndex],
          ];

          dispatch({
            type: SettingsActionTypes.LeagueOrder,
            payload: newOrder,
          });
        }}
        disabled={
          settings.leagueOrder.indexOf(league.key) ===
          settings.leagueOrder.length - 1
        }
        aria-label={`Move ${league.key} down`}
        className="p-1 rounded-full focus-visible-ring ring-offset-gray-100 dark:ring-offset-gray-800 text-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
      >
        <ChevronsDown className="w-4 h-4" aria-hidden />
      </button>
    </div>
  );
};

export { LeaguePosition };
