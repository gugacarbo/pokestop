"use client";

import {
  useSettings,
  SettingsActionTypes,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { useTranslations } from "next-intl";
import { outputDataKeys } from "@/@types/output-data";

function OutputDataSettings() {
  const { settings, dispatch } = useSettings();
  const t = useTranslations("settings");

  return (
    <SettingsSection id="output-data">
      {outputDataKeys.map((outputFieldkey) => (
        <SettingsSectionItem key={outputFieldkey}>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.OutputData,
                payload: { key: outputFieldkey, value },
              })
            }
            value={settings.outputData[outputFieldkey]}
            label={t(`output-data.fields.${outputFieldkey}.value`)}
            description={t(`output-data.fields.${outputFieldkey}.description`)}
          />
        </SettingsSectionItem>
      ))}
    </SettingsSection>
  );
}

export { OutputDataSettings };
