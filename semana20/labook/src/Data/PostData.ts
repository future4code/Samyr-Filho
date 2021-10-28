import { PostInputDTO, PostMethods } from "../Business/Post/iPost.Business";
import { Post } from "../Model/Post";

import { BaseDatabase } from "./BaseDatabase";

export class PostData extends BaseDatabase implements PostMethods {
    protected TABLE_NAME = "LaBook_Post"
    create = async (post: PostInputDTO) => {
        try {
            await BaseDatabase
                    .connection(this.TABLE_NAME)
                    .insert(post)
        }
        catch (error){
            throw new Error("Erro ao criar post no banco de dados")
        }
    }

    findById = async (id: string): Promise<Post> => {
        try {
            const queryResult: Post = Post.setPost(await BaseDatabase
                                .connection(this.TABLE_NAME)
                                .select("*")
                                .where(id))
            
            return post
        } catch (error) {
            
        }
    }
}