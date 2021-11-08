import { config } from "dotenv"
import app from "./app"
import { PostController } from "./Controller/Post/Post.Controller";
import UserController from "./Controller/User/User.Controller"

config()

const userController = new UserController();
const postController = new PostController();

app.post("/users/signup", userController.signup)
app.post("/users/login", userController.login)
app.post("/posts", postController.create)
app.post("/posts/like/:id", postController.likePost)
app.post("/posts/comment", postController.commentPost)
app.delete("/posts/like/:id", postController.unLikePost)

app.get("/posts", postController.findPostByUserId)

app.get("/posts/type", postController.findPostByType)
app.get("/posts/:id", postController.findPostById)
app.post("/user/friend/:friendId", userController.makeFriend)
app.delete("/user/friend/:friendId", userController.unMakeFriend)



