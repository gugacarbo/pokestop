"use client";

import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { LEVEL_CAPS } from "@/@types/level-cap";
import { useTranslations } from "next-intl";

function LevelCapSettings() {
  const { settings, dispatch } = useSettings();
  const t = useTranslations("settings");

  return (
    <SettingsSection id="level-caps">
      {LEVEL_CAPS.map((levelCap) => (
        <SettingsSectionItem key={levelCap}>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.LevelCap,
                payload: { key: levelCap, value },
              })
            }
            value={settings.levelCaps[levelCap]}
            label={t(`level-caps.fields.${levelCap}.value`)}
            description={t(`level-caps.fields.${levelCap}.description`)}
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { LevelCapSettings };
