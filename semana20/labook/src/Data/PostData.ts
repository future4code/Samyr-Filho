import { CommentPost, PostMethods, PostOutputDTO } from "../Business/Post/iPost.Business";
import { Post, POST_TYPE } from "../Model/Post";


import { BaseDatabase } from "./BaseDatabase";
import { commentsPostsTableName, likesPostTableName, postsTableName } from "./TableNames";

export class PostData extends BaseDatabase implements PostMethods {
    protected POST_TABLE_NAME = postsTableName;
    protected LIKEPOST_TABLE_NAME = likesPostTableName;
    protected COMMENTSPOST_TABLE_NAME = commentsPostsTableName;
    
    create = async (post: Post) => {
        try {
            await BaseDatabase
                    .connection(this.POST_TABLE_NAME)
                    .insert(post)
        }
        catch (error){
            // throw new Error("Erro ao criar post no banco de dados")
            throw error.sqlMessage || error.message;
        }
    }

    findById = async (id: string): Promise<PostOutputDTO> => {
        try {
            const queryResult = await BaseDatabase
                                .connection(this.POST_TABLE_NAME)
                                .select()
                                .where({id});
            
            return queryResult[0]
        } catch (error) {
            throw error.sqlMessage || error.message;
        }
    }
    findByUserId = async (UserId: string, page:number): Promise<any> => {
        try {
            const limit = 5;
            const offset = limit * (page - 1)
            const queryResult = await BaseDatabase
                                .connection(this.POST_TABLE_NAME)
                                .select()
                                .where({UserId: UserId})
                                .orderBy("creationDate", "desc")
                                .limit(limit)
                                .offset(offset);
                                
            return queryResult
        } catch (error) {
            throw error.sqlMessage || error.message;
        }
    }
    findByType = async (type: POST_TYPE): Promise<any> => {
        try {
            
            const queryResult = await BaseDatabase
                                .connection(this.POST_TABLE_NAME)
                                .select()
                                .where({type: type})
                                .orderBy("creationDate", "desc");
            return queryResult
        } catch (error) {
            throw error.sqlMessage || error.message;
        }
    }
    likePost = async (postId: string, userId:string): Promise<string> => {
        try {
            const queryResult = await BaseDatabase.connection(this.LIKEPOST_TABLE_NAME)
                .select("*")
                .where({"postId": postId, "userId": userId})
            if(queryResult.length > 0){
                return  "Post already liked by the user!"
            }
            await BaseDatabase.connection(this.LIKEPOST_TABLE_NAME)
                .insert({"userId": userId, "postId": postId})
            return  "Post successfully liked"
        } catch (error) {
            throw error.sqlMessage || error.message;
        }
    }
    unLikePost = async (postId: string, userId: string): Promise<string> => {
        try {
            const result = await BaseDatabase.connection(this.LIKEPOST_TABLE_NAME)
                .delete()
                .where({"postId": postId, "userId": userId})
            return "Post successfully disliked"
        } catch (error) {
            throw error.sqlMessage || error.message;
        }
    }

    commentPost = async (commentPost: CommentPost) => {
        try {
            await BaseDatabase.connection(this.COMMENTSPOST_TABLE_NAME)
                .insert(commentPost)
        } catch (error) {
            throw error.sqlMessage || error.message;
        }
        
    }
}