import { PrismaClient, Prisma } from "@prisma/client";
import { User } from "../../../src/domain/entities/users/User";

export interface IUserRepository {
    create: (user: User) => Promise<User>
}
