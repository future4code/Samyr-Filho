import { iMetodosUserController, iUserController } from "./iUser.Controller";
import UserMetodosController from "./User.Metodos.Controller";

export default class UserController implements iUserController{
    
    metodos : iMetodosUserController = new UserMetodosController;
}