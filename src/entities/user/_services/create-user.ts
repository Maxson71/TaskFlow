import {ROLES, UserEntity} from "../_domain/types";
import {userRepository} from "../_repositories/user";
import {createId} from "@/lib/id";
import {AdapterUser} from "next-auth/adapters";
import {privateConfig} from "@/config/private";

type CreateUser = {
    email: string;
    name?: string | null;
    image?: string | null;
    emailVerified?: Date | null;
}

export class createUseCase {
    async execute(data: CreateUser): Promise<AdapterUser> {
        const adminEmails = privateConfig.ADMIN_EMAILS?.split(",") ?? [];
        const role = adminEmails.includes(data.email) ? ROLES.ADMIN : ROLES.USER;

        const user: UserEntity = {
            id: createId(),
            role,
            ...data,
        };

        return await userRepository.createUser(user);
    }
}

export const createUserService = new createUseCase();