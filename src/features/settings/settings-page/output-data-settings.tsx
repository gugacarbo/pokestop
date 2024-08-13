"use client";

import {
  useSettings,
  SettingsActionTypes,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { OUTPUT_DATA } from "@/data/outputData";

function OutputDataSettings() {
  const { settings, dispatch } = useSettings();

  return (
    <SettingsSection id="output-data">
      {OUTPUT_DATA.map((outputField) => (
        <SettingsSectionItem key={outputField.key}>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.OutputData,
                payload: { key: outputField.key, value },
              })
            }
            value={settings.outputData[outputField.key]}
            label={outputField.name}
            description={outputField.description}
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { OutputDataSettings };
