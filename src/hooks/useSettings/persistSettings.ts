import { setCookie } from "nookies";

import { Settings } from ".";
import { env } from "@/lib/env";
import { useLocalStorageReducerState } from "../useLocalStorageReducerState";
import { settingsReducer } from "./settingsReducer";
import { defaultSettings } from "./useInitialSettings";

export function setSettingsCookie(settings: Settings) {
  setCookie({}, `${env.APP_NAME}_settings`, JSON.stringify(settings), {
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
}

export function useLocalSettings() {
  const [settings, setSettings] = useLocalStorageReducerState(
    `${env.APP_NAME}_settings`,
    settingsReducer,
    defaultSettings
  );

  return [settings, setSettings] as const;
}
