import { Prisma, PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../../src/application/interfaces/IUserRepository";
import { User } from "../../../src/domain/entities/users/User";

export class UserRepository implements IUserRepository {
  private userRepository!: Prisma.UserDelegate<undefined>;
  constructor() {
    this.userRepository = new PrismaClient().user;
  }
  async create(user: User): Promise<User> {
    const createdUser = await this.userRepository.create({
      data: { ...user, todos: { create: [] } },
    });
    return new User({ ...createdUser }, createdUser.id);
  }
  async findByUsername(username: string): Promise<User | null> {
    const userModel = await this.userRepository.findFirst({
      where: { username },
    });
    if (!userModel) return null;
    return new User({ ...userModel }, userModel.id);
  }
  async delete(id: number): Promise<void> {
    await this.userRepository.delete({ where: { id } });
  }
}
