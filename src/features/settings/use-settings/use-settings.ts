"use client";

import { useContext } from "react";
import { SettingsContext } from "./context/settings-context";

function useSettings() {
  const value = useContext(SettingsContext);
  if (value === null) {
    throw new Error(
      "useSettings must be called within the context of a SettingsProvider"
    );
  }
  return value;
}

export { useSettings };
