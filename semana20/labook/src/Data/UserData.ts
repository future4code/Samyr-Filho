import { UserMethods } from "../Business/User/iUserBusiness";
import { User } from "../Model/User";
import { BaseDatabase } from "./BaseDatabase";
import { friendsTableName } from "./TableNames";
export class UserData extends BaseDatabase implements UserMethods {
    
    protected usersTableName = "LaBook_Users";
    protected firendsTableName = "LaBook_Friends";

    

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
    public async makeFriends (id: string, friendId: string) {
        try {
            
            await BaseDatabase.connection(friendsTableName)
                .insert({id: id, friendId: friendId})
            
        } catch (error: any) {
            throw error.sqlMessage || error.message
            
        }
    }
    public async unMakeFriends (id: string, friendId: string) {
        try {
            await BaseDatabase.connection(friendsTableName)
                .delete()
                .where({"id": id, "friendId": friendId})
        } catch (error: any) {
            throw error.sqlMessage || error.message
            
        }
    }
}
