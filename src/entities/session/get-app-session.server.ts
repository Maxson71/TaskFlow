import { getServerSession} from "next-auth";
import {nextAuthConfig} from "@/entities/session/next-auth-config";

export const getSessionServer = () => getServerSession(nextAuthConfig);