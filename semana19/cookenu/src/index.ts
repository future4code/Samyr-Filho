import { config } from "dotenv"
import app from "./app"


import { signup } from "./endpoints/signup"

config()

app.post("/user/signup", signup)

