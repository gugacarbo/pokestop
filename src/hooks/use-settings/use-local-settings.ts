import { env } from "@/lib/env";
import { useLocalStorageReducerState } from "../use-storage-reducer-state";
import { settingsReducer } from "./settings-reducer";
import { defaultSettings } from "./use-initial-settings";


export function useLocalSettings() {
  const [settings, setSettings] = useLocalStorageReducerState(
    `${env.APP_NAME}_settings`,
    settingsReducer,
    defaultSettings
  );

  return [settings, setSettings] as const;
}
