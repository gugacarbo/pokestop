import { z } from "zod";
import pkg from "@/../package.json";

const envSchema = z.object({
  APP_NAME: z.string(),
  APP_ENV: z.string(),
  API_URL: z.string(),
});

export const env = envSchema.parse({
  APP_NAME: pkg.name,
  // ...process.env,
  APP_ENV: "local",
  API_URL: "http://localhost:3000",
});
