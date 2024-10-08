import { getServerSession} from "next-auth";
import { nextAuthConfig } from "@/entities/user/next-auth-config";
import {NeedAuthError} from "@/lib/errors";

export const getSessionServer = () => getServerSession(nextAuthConfig);

export const getSessionServerStrictServer = async () => {
    const session = await getSessionServer();

    if(session === null) {
        throw new NeedAuthError();
    }

    return session;
}