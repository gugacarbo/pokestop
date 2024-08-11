import { z } from "zod";
import pkg from "@/../package.json";

const envSchema = z.object({
  APP_NAME: z.string(),
  APP_ENV: z.string(),
  API_URL: z.string(),
});

export const env = envSchema.parse({
  APP_NAME: pkg.name,
  APP_VERSION: pkg.version,
  APP_REPO: pkg.repository.url,
  APP_ENV: process.env.NODE_ENV,
  API_URL: process.env.API_URL ?? "http://localhost:3000/api",
});
