import { config } from "dotenv"
import app from "./app"
import UserController from "./Controller/User/User.Controller"

config()

const userController = new UserController();

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)


