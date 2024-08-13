"use client";

import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { LEVEL_CAPS } from "@/data/levelCap";

function LevelCapSettings() {
  const { settings, dispatch } = useSettings();

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
            label={levelCap.name}
            description={levelCap.description}
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { LevelCapSettings };
