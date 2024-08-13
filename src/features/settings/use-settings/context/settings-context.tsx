import { createContext } from "react";
import { Settings } from "..";
import { Dispatch } from "../settings-reducer";

export const SettingsContext = createContext<{
  settings: Settings;
  dispatch: Dispatch;
} | null>(null);
