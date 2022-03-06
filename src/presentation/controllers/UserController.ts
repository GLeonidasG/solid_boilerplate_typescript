import { UserService } from "src/application/services/users/UserService";
import { Request, Response } from "express"
export class UserController {
    userServices: UserService
    constructor(userServices: UserService){
        this.userServices = userServices
    }

    async create(req: Request, res: Response): Promise<Response> {
        const {name, username, password} = req.body; 
        const user = await this.userServices.create({name, username, password, todos: []});
        return res.status(201).send(user);
    }
}