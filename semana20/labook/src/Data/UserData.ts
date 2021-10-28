import { UserMethods } from "../Business/User/iUserBusiness";
import { User } from "../Model/User";
import { BaseDatabase } from "./BaseDatabase";
export class UserData extends BaseDatabase implements UserMethods {
    
    protected usersTableName = "LaBook_Users"

    

    public async create(user: User) {
        try {
            await BaseDatabase.connection(this.usersTableName)
            .insert(
                user
            ); 
            return user
        }
        catch(error: any) {
                throw error.sqlMessage || error.message;
        }
    }

    public async findByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(this.usersTableName)
                .select("*")
                .where({email});
    
                return user[0] && User.setUser(user[0])
        }
        catch(error: any) {
                throw error.sqlMessage || error.message;
        }
    }
}
