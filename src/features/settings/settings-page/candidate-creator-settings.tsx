"use client";

import {
  SettingsActionTypes,
  useSettings,
} from "@/features/settings/use-settings";
import { SettingsSection } from "@/features/settings/components/settings-section";
import { SettingsSectionItem } from "@/features/settings/components/settings-section-item";
import { SettingsSectionItemToggle } from "@/features/settings/components/settings-section-item-toggle";

function CandidateCreatorSettings() {
  const { settings, dispatch } = useSettings();

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
          label="Show Speculative Pokémon"
          description="Unreleased Generations, Forms and Mega Evolutions. For some speculative Pokémon this will include multiple variations with different stat nerfs based on similar cases in the past."
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
          label="Alternate Ranking Metrics"
          description="Options to sort by Attack, Defense and Stamina as well as the default Stat Product."
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
          label="Allow Impossible IV Floors"
          description="Allow any IV floor to be picked when creating a Candidate, regardless of acquisition method limitations."
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
          label="Minimum Level"
          description="Choose the minimum level to use when creating a Candidate. Useful for checking ranks when species are not available at certain lower levels."
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
          label="Invert IV Dropdown"
          description="List IV options from 15-0 (descending) instead of 0-15 (ascending)."
        />
      </SettingsSectionItem>
    </SettingsSection>
  );
}

export { CandidateCreatorSettings };
