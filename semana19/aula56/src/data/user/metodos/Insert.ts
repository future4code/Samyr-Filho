import { HashManager } from "../../../services/HashManager";
import { IdGenerator } from "../../../services/IdGenerator";
import { user, USER_ROLES } from "../../../types";
import { connection } from "../../connection";
import { iMetodoUserInsert } from "../iUser";

export class Insert implements iMetodoUserInsert{
    private email: string
    private password: string
    private role: USER_ROLES
    
    setEmail(value: string): iMetodoUserInsert{
        this.email = value;
        return
    };
    setPassword(value: string): iMetodoUserInsert{
        this.password = value
        return 
    };
    setRole(value: USER_ROLES): iMetodoUserInsert{
        this.role = value
        return 
    };
    end(): user{
    const userTable = "Aula55_User";
    const id: string = new IdGenerator().generateId();
    const cipherPassword = new HashManager().generateHash(this.password);
    const user: user = {
        id,
        email: this.email,
        password: cipherPassword,
        role: this.role
    }
    connection
    .insert(
        user
      )
    .into(userTable)
    return user;
    };


    
}