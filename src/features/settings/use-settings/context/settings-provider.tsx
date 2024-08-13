"use client";

import React, { FC, ReactNode, useReducer, useEffect } from "react";

import { SettingsContext } from "./settings-context";
import { Settings } from "..";
import { setSettingsCookie } from "../set-settings-cookie";
import { settingsReducer } from "../settings-reducer";

function useSyncSettingsCookie(settings: Settings) {
  useEffect(() => {
    setSettingsCookie(settings);
  }, [settings]);
}

export const SettingsProvider: FC<{
  children: ReactNode;
  initialSettings: Settings;
}> = ({ children, initialSettings }) => {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);
  useSyncSettingsCookie(settings);

  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
