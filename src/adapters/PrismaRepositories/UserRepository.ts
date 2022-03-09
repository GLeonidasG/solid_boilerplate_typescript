import { Prisma, PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../../src/application/interfaces/IUserRepository";
import { User } from "../../../src/domain/entities/users/User";

export class UserRepository implements IUserRepository {
    private userRepository!: Prisma.UserDelegate<undefined>
    constructor() {
        this.userRepository = new PrismaClient().user;
    }
    async create(user: User): Promise<User> {
        const createdUser = await this.userRepository.create({ data: { ...user, todos: { create: [] } } })
        return new User({ ...createdUser  }, createdUser.id)
    }
}