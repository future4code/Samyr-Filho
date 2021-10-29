import { config } from "dotenv"
import app from "./app"
import { PostBusiness } from "./Business/Post/Post.Business";
import { PostController } from "./Controller/Post/Post.Controller";
import UserController from "./Controller/User/User.Controller"

config()

const userController = new UserController();
const postController = new PostController();

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)
app.post("/posts", postController.create)
app.get("/posts/:id", postController.findPostById)
app.post("/user/friend/:friendId", userController.makeFriend)
app.delete("/user/friend/:friendId", userController.unMakeFriend)


