import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { dbClient } from "@/lib/db";
import { privateConfig } from "@/config/private";
import { compact } from "lodash-es";
import {createUserService} from "@/entities/user/_services/create-user";

const prismaAdapter = PrismaAdapter(dbClient);

export const nextAuthConfig: AuthOptions = {
    adapter: {
        ...prismaAdapter,
        createUser: (user) => {
            return createUserService.execute(user);
        },
    } as AuthOptions["adapter"],
    callbacks: {
        session: async ({ session, user }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    role: user.role,
                },
            };
        },
    },
    providers: compact([
        privateConfig.GITHUB_ID && privateConfig.GITHUB_SECRET &&
        GithubProvider({
            clientId: privateConfig.GITHUB_ID,
            clientSecret: privateConfig.GITHUB_SECRET,
        })
    ]),
}