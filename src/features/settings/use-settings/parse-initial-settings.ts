import { defaultSettings } from "../default-settings";
import { Settings } from ".";

function parseInitialSettings(value: string | undefined) {
  if (!value) return defaultSettings;

  try {
    let parsed: Settings | undefined;
    try {
      parsed = JSON.parse(value) as Settings;
    } catch (err) {
      parsed = undefined;
    }

    return {
      ...defaultSettings,
      ...parsed,
      outputData: {
        ...defaultSettings.outputData,
        ...(parsed ?? {}).outputData,
      },
    };
  } catch (err) {
    return defaultSettings;
  }
}
export { parseInitialSettings };
