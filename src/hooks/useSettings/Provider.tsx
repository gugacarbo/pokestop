import React, { FC, ReactNode, useReducer, useEffect } from "react";

import { Context, Settings } from ".";

import { settingsReducer } from "./settingsReducer";
import { useLocalSettings } from "./persistSettings";
import { defaultSettings } from "./useInitialSettings";

export const Provider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [settings, dispatch] = useLocalSettings();
  return (
    <Context.Provider value={{ settings, dispatch }}>
      {children}
    </Context.Provider>
  );
};
