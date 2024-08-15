"use server";
import { defaultSettings } from "./default-settings";
import { Settings, settingsSchema } from "@/@types/settings";

export async function parseSettingsCookies(value?: string) {
  try {
    const parsed = JSON.parse(value || "{}") as Settings;

    return settingsSchema.parse(parsed);
  } catch (err) {
    return defaultSettings;
  }
}
