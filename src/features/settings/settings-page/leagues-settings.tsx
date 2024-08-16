"use client";

import { LEAGUES } from "@/@types/league";
import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { LeaguePosition } from "@/features/settings/components/league-position";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { useTranslations } from "next-intl";

function LeaguesSettings() {
  const { settings, dispatch } = useSettings();
  const t = useTranslations();

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
            // description={`Max CP: ${league.cp}`}
            label={
              //@ts-ignore
              t(`rankings.cpLeagues.${league.key}.value`)
            }
            description={
              //@ts-ignore
              t(`rankings.cpLeagues.${league.key}.description`)
            }
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { LeaguesSettings };
