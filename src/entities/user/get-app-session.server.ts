import { getServerSession} from "next-auth";
import {nextAuthConfig} from "@/entities/user/next-auth-config";

export const getSessionServer = () => getServerSession(nextAuthConfig);