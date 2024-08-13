"use client";

import {
  useSettings,
  SettingsActionTypes,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { OUTPUT_DATA } from "@/data/outputData";
import { useTranslations } from "next-intl";

function OutputDataSettings() {
  const { settings, dispatch } = useSettings();
  const t = useTranslations("settings");

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
            label={
              //@ts-ignore
              t(`output-data.fields.${outputField.key}.value`)
            }
            description={
              //@ts-ignore
              t(`output-data.fields.${outputField.key}.description`)
            }
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { OutputDataSettings };
