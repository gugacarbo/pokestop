import { settingsReducer } from "../settings-reducer";
import { defaultSettings } from "../get-initial-settings";
import { Settings } from "..";
import { useReducer } from "react";

export function useLocalSettings(
  { initialSettings }: { initialSettings?: Settings } = {
    initialSettings: defaultSettings,
  }
) {
  const [settings, dispatch] = useReducer(settingsReducer, defaultSettings);

  return [settings, dispatch] as const;
}
