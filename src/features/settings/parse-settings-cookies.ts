"use server";
import { defaultSettings } from "./default-settings";
import { Settings } from "./use-settings";

export async function parseSettingsCookies(value?: string) {
  try {
    const parsed = JSON.parse(value || "{}") as Settings;
    return {
      ...defaultSettings,
      ...parsed,
      outputData: {
        ...defaultSettings.outputData,
        ...parsed.outputData,
      },
    };
  } catch (err) {
    return defaultSettings;
  }
}
