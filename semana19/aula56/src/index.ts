import { config } from "dotenv"
import app from "./app"
import deleteUser from "./endpoints/deleteUser"
import getUser from "./endpoints/getUser"
import login from "./endpoints/login"
import profileUser from "./endpoints/profileUser"
import signup from "./endpoints/signup"

config()

app.post("/user/signup", signup)
app.post("/user/login", login)
app.get("/user/profile", profileUser)
app.delete("/user/:id", deleteUser)
app.get("/user", getUser)

