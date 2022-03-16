import { User } from "../../../src/domain/entities/users/User";

export interface IUserRepository {
    create: (user: User) => Promise<User>
    findByUsername: (username: string) => Promise<User | null>;
    delete: (id: number) => Promise<void>;
}
