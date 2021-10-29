import { PostMethods, PostOutputDTO } from "../Business/Post/iPost.Business";
import { Post, POST_TYPE } from "../Model/Post";


import { BaseDatabase } from "./BaseDatabase";

export class PostData extends BaseDatabase implements PostMethods {
    protected TABLE_NAME = "LaBook_Posts"
    create = async (post: Post) => {
        try {

            
            await BaseDatabase
                    .connection(this.TABLE_NAME)
                    .insert(post)
        }
        catch (error){
            throw new Error("Erro ao criar post no banco de dados")
        }
    return
    }

    findById = async (id: string): Promise<PostOutputDTO> => {
        try {
            const queryResult = await BaseDatabase
                                .connection(this.TABLE_NAME)
                                .select()
                                .where({id});
            
            return queryResult[0]
        } catch (error) {
            return null
        }
    }
    findByUserId = async (UserId: string): Promise<any> => {
        try {
            
            const queryResult = await BaseDatabase
                                .connection(this.TABLE_NAME)
                                .select()
                                .where({UserId: UserId})
                                .orderBy("creationDate", "desc");
            return queryResult
        } catch (error) {
            return null
        }
    }
    findByType = async (type: POST_TYPE): Promise<any> => {
        try {
            
            const queryResult = await BaseDatabase
                                .connection(this.TABLE_NAME)
                                .select()
                                .where({type: type})
                                .orderBy("creationDate", "desc");
            return queryResult
        } catch (error) {
            return null
        }
    }
}