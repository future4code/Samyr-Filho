import { config } from "dotenv"
import app from "./app"
import { UserController } from "./Controller/User/User.Controller";

config()

const userController = new UserController;

app.post("/user/signup", userController.metodos.signup)
app.post("/user/login", userController.metodos.login)
app.get("/all", userController.metodos.getUsers)
app.delete("/:id", userController.metodos.delete)


