import { IUserRepository } from "../../../../src/application/interfaces/IUserRepository";
import { CreateUserDTO, User } from "../../../../src/domain/entities/users/User";

export class UserService {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository
    }

    async create(user: CreateUserDTO){
        const userModel = new User(user);
        if(!userModel.checkPasswordComplexity()) throw new Error("Password is not complex enough");
        return await this.userRepository.create(userModel);
    }

    update(){}

    read(){}

    async delete(username: string){
      const userModel = await this.userRepository.findByUsername(username);
      if (!userModel) throw Error("User not found!")
      await this.userRepository.delete(userModel.id)
    }

}
