import { UserService } from "../../../src/application/services/users/UserService";
import { Request, Response } from "express";
export class UserController {
  userServices: UserService;
  constructor(userServices: UserService) {
    this.userServices = userServices;
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, username, password } = req.body;
      const user = await this.userServices.create({ name, username, password });
      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error });
    }
  };
  public delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { username } = req.params;
      await this.userServices.delete(username);
      return res.status(204);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: error });
    }
  };
}
