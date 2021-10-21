import { Follow } from "../model/follows/follow";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "./BaseDatabase";
const tableName = "cookenu_Follow"
export class FollowDatabase extends BaseDatabase {
    public async followUser(userId: string, userToFollowId:string){
        try {
            const follow = await this.findFollowUser(userId, userToFollowId);
            if(follow) {
                await BaseDatabase.connection(tableName)
                    .update("follow", true)
                    .where("id", follow.getId())
            } else {
                const id: string = new IdGenerator().generateId()
                await BaseDatabase.connection(tableName)
                    .insert({
                        id: id,
                        userId: userId,
                        userToFollowId: userToFollowId,
                        dateFollowInit: new Date(),
                        follow: true
                    })
            }
        }
        catch (error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async unfollowUser(userId: string, userToFollowId:string){
        try {
            const follow = await this.findFollowUser(userId, userToFollowId);
            if(follow) {
                await BaseDatabase.connection(tableName)
                    .update("follow", false)
                    .where("id", follow.getId())
            }
        }
        catch (error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async findFollowUser(userId: string, followingUserId: string){
        try {
        const usersFollow = await BaseDatabase.connection(tableName)
            .select("*")
            .where({userId :`${userId}`, userToFollowId: `${followingUserId}`})
        return usersFollow[0] && Follow.toFollowModel(usersFollow[0])
        }
        catch (error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
}