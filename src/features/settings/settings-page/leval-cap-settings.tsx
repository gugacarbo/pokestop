"use client";

import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { LEVEL_CAPS } from "@/data/levelCap";
import { useTranslations } from "next-intl";

function LevelCapSettings() {
  const { settings, dispatch } = useSettings();
  const t = useTranslations("settings");

  return (
    <SettingsSection id="level-caps">
      {LEVEL_CAPS.map((levelCap) => (
        <SettingsSectionItem key={levelCap.name}>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.LevelCap,
                payload: { key: levelCap.level, value },
              })
            }
            value={settings.levelCaps[levelCap.level]}
            label={
              //@ts-ignore
              t(`level-caps.fields.${levelCap.level}.value`)
            }
            description={
              //@ts-ignore
              t(`level-caps.fields.${levelCap.level}.description`)
            }
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { LevelCapSettings };
