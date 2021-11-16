import { iMetodosUser, iMetodoUserInsert, iUser } from "./iUser";
import { Insert } from "./metodos/Insert";

export class UsersClass implements iUser {
    metodos: iMetodosUser;


    insert(): iMetodoUserInsert {
        return ;
    };
    
}