import { config } from "dotenv"
import app from "./app"
import { UserController } from "./Controller/UserController"

config()

const userController = new UserController();

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)
app.get("/all", userController.getUsers)
app.delete("/:id", userController.delete)


