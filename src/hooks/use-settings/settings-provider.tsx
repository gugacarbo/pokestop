"use client";

import React, { FC, ReactNode, useReducer, useEffect } from "react";

import { Context, Settings } from ".";

import { useLocalSettings } from "./use-local-settings";

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
