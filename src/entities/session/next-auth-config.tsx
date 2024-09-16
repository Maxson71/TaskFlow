import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { dbClient } from "@/lib/db";
import { env } from "@/config/config";
import { compact } from "lodash-es";

export const nextAuthConfig: AuthOptions = {
    adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
    providers: compact([
        env.GITHUB_ID && env.GITHUB_SECRET &&
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        })
    ]),
}