import { config } from "dotenv"
import app from "./app"
import { delRecipe } from "./endpoints/delRecipe"
import { followUser } from "./endpoints/followUser"
import { getFeeds } from "./endpoints/getFeeds"
import { getRecipe } from "./endpoints/getRecipe"
import { getUser } from "./endpoints/getUser"
import { insertRecipe } from "./endpoints/insertRecipe"
import { login } from "./endpoints/login"
import { profile } from "./endpoints/profile"
import { signup } from "./endpoints/signup"
import { unfollowUser } from "./endpoints/unfollowUser"

config()


app.get("/user/profile", profile)


app.get("/user/feed", getFeeds)
app.get("/user/:id", getUser)
app.get("/recipe/:id", getRecipe)

app.post("/user/signup", signup)
app.post("/user/login", login)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)
app.post("/recipe", insertRecipe)
app.delete("/recipe", delRecipe)
