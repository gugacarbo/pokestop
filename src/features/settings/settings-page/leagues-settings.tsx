"use client";

import { LEAGUES } from "@/data/league";
import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { LeaguePosition } from "@/features/settings/components/league-position";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";

function LeaguesSettings() {
  const { settings, dispatch } = useSettings();

  return (
    <SettingsSection id="leagues">
      {LEAGUES.sort(
        (a, b) =>
          settings.leagueOrder.indexOf(a.key) -
          settings.leagueOrder.indexOf(b.key)
      ).map((league) => (
        <SettingsSectionItem key={league.key}>
          <LeaguePosition league={league} />
          <SettingsSectionItemToggle
            key={league.key}
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.League,
                payload: { key: league.key, value },
              })
            }
            value={settings.leagues[league.key]}
            label={league.name}
            description={`Max CP: ${league.cp}`}
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { LeaguesSettings };
