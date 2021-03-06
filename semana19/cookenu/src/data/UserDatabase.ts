
import { User } from "../model/users/user";
import { BaseDatabase } from "./BaseDatabase";
const userTable: string = "cookenu_Users";

export class UserDatabase extends BaseDatabase {
    
    public async findUserByEmail(email: string): Promise<User> {
        try {

            const user = await BaseDatabase.connection(userTable)

                .select("*")
                .where({email});
                return user[0] && User.toUserModel(user[0])
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async createUser (user: User) {
        try {
            console.log('createUser', user, userTable)
            await BaseDatabase.connection(userTable)
            .insert({
                id: user.getId,
                name: user.getName,
                email: user.getEmail,
                password: user.getPassword
            }); 
        }
        catch(error){

        }
    }

    public async getAllUsers(): Promise<User[]> {
        try {

            const users = await BaseDatabase.connection(userTable)

                .select("id", "name", "email", "role");
                return users.map((user => User.toUserModel(user)))
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

}
