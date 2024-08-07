import { z } from "zod";

const envSchema = z.object({
    APP_NAME: z.string(),
    APP_ENV: z.string(),
    APP_VERSION: z.string(),
    API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
