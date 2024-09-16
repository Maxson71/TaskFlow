import { PrismaClient } from "@prisma/client";

declare global {
    var dbClient: PrismaClient | undefined;
}
let dbClient: PrismaClient;

if (process.env.NODE_ENV === "production") {
    dbClient = new PrismaClient();
} else {
    if (!global.dbClient) {
        global.dbClient = new PrismaClient();
    }
    dbClient = global.dbClient;
}

export { dbClient };