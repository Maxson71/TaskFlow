import { z } from "zod";

const configSchema = z.object({
    GITHUB_ID: z.string().optional(),
    GITHUB_SECRET: z.string().optional(),
    ADMIN_EMAILS: z.string().optional(),
});

export const privateConfig = configSchema.parse(process.env);