import { PostData } from "../../Data/PostData";
import { Post, POST_TYPE } from "../../Model/Post";
import { Function } from "../../services/Functions";
import { IdGenerator } from "../../services/IdGenerator";
import { CommentsPostInputDTO, ListPostOutputDTO, PostInputDTO, PostOutputDTO } from "./iPost.Business";

export class PostBusiness {
    private idGenerator: IdGenerator
    private postData: PostData
    constructor(
        postDataImplement : PostData
    ){
        this.idGenerator = new IdGenerator()
        this.postData = postDataImplement
    }

    create = async (input: PostInputDTO) => {
        const {userId, description, photoURL, creationDate, type} = input;
        if(!description || !photoURL || !creationDate || !type){
            throw "'description', 'photoURL', 'creationDate' and 'type' are required fields!"
        }
        
        if(!type || (type !== "EVENTO") && (type !== "NORMAL")){
            throw "field 'type' must be of type 'EVENTO' or 'NORMAL'!"
        }
        const id: string = this.idGenerator.generateId();
        const newPost = new Post(id, 
                                 userId, 
                                 description, 
                                 photoURL, 
                                 new Function().dateStrToDate(creationDate),
                                 type)
        await this.postData.create(newPost)
        return newPost
    }
    findByid = async (id: string): Promise<PostOutputDTO> => {
       
        if(!id){
            throw "'id' is required field!"
        }
        
        const result = await this.postData.findById(id);
        
        if (!result){
            throw "Post not found!"
        }
        
        return result
       
    }
    findByUserId = async (userId: string, page: number): Promise<ListPostOutputDTO | null> => {
       
        if(!userId){
            throw "'userId' is required field!"
        }
        const result = await this.postData.findByUserId(userId, page);
        
        return result
       
    }
    findByType = async (type: POST_TYPE): Promise<ListPostOutputDTO | null> => {
       
        if(!type){
            throw "'type' is required field!"
        }
        const result = await this.postData.findByType(type);
        
        return result
       
    }
    likePost = async (postId: string, userId: string): Promise<string> => {
        if(!userId || !postId){
            throw "'postId' and 'userId' is required fields!"
        }

        const post = await this.postData.findById(postId)
        if (!post){
            throw "Post is not found!"
        }
        const result = await this.postData.likePost(postId, userId)
        return result
    }
    unLikePost = async (postId: string, userId: string): Promise<string> => {
        if(!postId || !userId){
            throw "'postId' and 'userId' is required fields!"
        }
        const result = await this.postData.unLikePost(postId, userId)
        
        return result
    }
    commentPost = async (commentPost: CommentsPostInputDTO): Promise<void> => {
        const existPost = await this.findByid(commentPost.postId)
        if (!existPost){
            throw "postId not found"
        }
        const id: string = this.idGenerator.generateId();
        await this.postData.commentPost({
            id: id,
            userId: commentPost.userId,
            postId: commentPost.postId,
            comment: commentPost.comment
        })
    }
}