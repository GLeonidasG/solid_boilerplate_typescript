import {Router} from "express"
import { UserRepository } from "src/adapters/PrismaRepositories/UserRepository";
import { UserService } from "src/application/services/users/UserService";
import { UserController } from "../controllers/UserController";

const userRoutes = Router();

const userRepository = new UserRepository();
const userServices = new UserService(userRepository);
const userController = new UserController(userServices)

userRoutes.post("/users/create", userController.create);

export default userRoutes;
