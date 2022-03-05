import Express from "express";

export class Server {

    private app!: Express.Application;
    private PORT = 3030;

    public runApp(): void {
        this.app = Express();
        this.app.get("/", (req, res) => res.send({ message: "Hello world" }))
        this.app.listen(this.PORT, () => console.log(`Listening on port http://localhost:${this.PORT}`));
    }
}