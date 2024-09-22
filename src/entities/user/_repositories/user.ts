import { dbClient } from "@/lib/db";
import { UserEntity } from "@/entities/user/_domain/types";

export class UserRepository {
    async createUser(user: UserEntity) {
        return dbClient.user.create(
            {
                data: user,
            });
    }
}

export const userRepository = new UserRepository();