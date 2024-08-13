"use client";

import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";
import { useTranslations } from "next-intl";

function CandidateCreatorSettings() {
  const { settings, dispatch } = useSettings();

  const t = useTranslations("settings.candidate.fields");

  return (
    <SettingsSection id="candidate">
      <SettingsSectionItem>
        <SettingsSectionItemToggle
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.Speculative,
              payload: value,
            })
          }
          value={settings.showSpeculative}
          label={t("showSpeculative.value")}
          description={t("showSpeculative.description")}
        />
      </SettingsSectionItem>

      <SettingsSectionItem>
        <SettingsSectionItemToggle
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.RankingMetric,
              payload: value,
            })
          }
          value={settings.showRankingMetric}
          label={t("showRankingMetric.value")}
          description={t("showRankingMetric.description")}
        />
      </SettingsSectionItem>

      <SettingsSectionItem>
        <SettingsSectionItemToggle
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.ImpossibleFloors,
              payload: value,
            })
          }
          value={settings.allowImpossibleFloors}
          label={t("allowImpossibleFloors.value")}
          description={t("allowImpossibleFloors.description")}
        />
      </SettingsSectionItem>

      <SettingsSectionItem>
        <SettingsSectionItemToggle
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.MinimumLevel,
              payload: value,
            })
          }
          value={settings.showMinimumLevel}
          label={t("showMinimumLevel.value")}
          description={t("showMinimumLevel.description")}
        />
      </SettingsSectionItem>

      <SettingsSectionItem>
        <SettingsSectionItemToggle
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.InvertIVDropdown,
              payload: value,
            })
          }
          value={settings.invertIVDropdown}
          label={t("invertIVDropdown.value")}
          description={t("invertIVDropdown.description")}
        />
      </SettingsSectionItem>
    </SettingsSection>
  );
}

export { CandidateCreatorSettings };
