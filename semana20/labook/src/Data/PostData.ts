import { PosOutputDTO, PostMethods } from "../Business/Post/iPost.Business";
import { Post } from "../Model/Post";


import { BaseDatabase } from "./BaseDatabase";

export class PostData extends BaseDatabase implements PostMethods {
    protected TABLE_NAME = "LaBook_Posts"
    create = async (post: Post) => {
        try {

            console.log('Post', post);
            
            await BaseDatabase
                    .connection(this.TABLE_NAME)
                    .insert(post)
        }
        catch (error){
            throw new Error("Erro ao criar post no banco de dados")
        }
    return
    }

    findById = async (id: string): Promise<PosOutputDTO> => {
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
}