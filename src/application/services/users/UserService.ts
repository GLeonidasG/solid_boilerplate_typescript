import { IUserRepository } from "../../../../src/application/interfaces/IUserRepository";
import { CreateUserDTO, User } from "../../../../src/domain/entities/users/User";

export class UserService {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async create(user: CreateUserDTO){
        const userModel = new User(user);
        if(!userModel.checkPasswordComplexity(true)) throw new Error("Password is not complex enough");
        return await this.userRepository.create(userModel);
    }

    update(){}

    read(){}

    delete(){}

}