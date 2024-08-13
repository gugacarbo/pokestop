import React, { FC, ReactNode, useReducer, useEffect } from "react";

import { useLocalSettings } from "./use-local-settings";
import { SettingsContext } from "./settings-context";
import { Settings } from "..";

export const SettingsProvider: FC<{
  children: ReactNode;
  initialSettings?: Settings;
}> = ({ children, initialSettings }) => {
  const [settings, dispatch] = useLocalSettings();
  console.log({ settings });

  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
