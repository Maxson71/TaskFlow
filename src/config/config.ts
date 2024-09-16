import { z } from "zod";

const configSchema = z.object({
    GITHUB_ID: z.string().optional(),
    GITHUB_SECRET: z.string().optional(),
});

export const env = configSchema.parse(process.env);