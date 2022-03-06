import Express, { Router } from "express";
import userRoutes from "./presentation/routes/user-routes";

export class Server {

    private app!: Express.Application;
    private PORT = 3030;

    private setupRoutes(): void {
        const routes = Router();
        routes.use("/users", userRoutes);
        this.app.use("/api", routes);
    }

    public runApp(): void {
        this.app = Express();
        this.app.get("/", (req, res) => res.send({ message: "Hello world" }))
        this.setupRoutes();
        this.app.listen(this.PORT, () => console.log(`Listening on port http://localhost:${this.PORT}`));
    }
}