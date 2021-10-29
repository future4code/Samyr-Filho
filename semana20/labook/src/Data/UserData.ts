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
    public async findFriendByIdFriend(userId: string, friendId: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(this.firendsTableName)
                .select("*")
                .where({userId, friendId});
    
                return user[0] && User.setUser(user[0])
        }
        catch(error: any) {
                throw error.sqlMessage || error.message;
        }
    }
    public async makeFriends (userId: string, friendId: string) {
        try {

            await BaseDatabase.connection(this.firendsTableName)
                .insert({userId: userId, friendId: friendId})
            
        } catch (error: any) {
            throw error.sqlMessage || error.message
            
        }
    }
    public async unMakeFriends (userId: string, friendId: string) {
        try {
            await BaseDatabase.connection(friendsTableName)
                .delete()
                .where({"userId": userId, "friendId": friendId})
        } catch (error: any) {
            throw error.sqlMessage || error.message
            
        }
    }
}
