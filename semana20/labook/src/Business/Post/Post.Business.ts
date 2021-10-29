import { PostData } from "../../Data/PostData";
import { Post, POST_TYPE } from "../../Model/Post";
import { Function } from "../../services/Functions";
import { IdGenerator } from "../../services/IdGenerator";
import { ListPostOutputDTO, PostInputDTO, PostOutputDTO } from "./iPost.Business";

export class PostBusiness {
    private id: IdGenerator
    private postData: PostData
    constructor(
        postDataImplement : PostData
    ){
        this.id = new IdGenerator()
        this.postData = postDataImplement
    }

    create = async (input: PostInputDTO) => {
        const {userId, description, photoURL, creationDate, type} = input;
        if(!description || !photoURL || !creationDate || !type){
            throw new Error("'description', 'photoURL', 'creationDate' and 'type' are required fields!")
        }
        
        if(!type || (type !== "EVENTO") && (type !== "NORMAL")){
            throw new Error("field 'type' must be of type 'EVENTO' or 'NORMAL'!")
        }
        const id: string = new IdGenerator().generateId();
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
            throw new Error("'id' is required field!")
        }
        
        const result = await this.postData.findById(id);
        
        return result
       
    }
    findByUserId = async (UserId: string): Promise<ListPostOutputDTO | null> => {
       
        if(!UserId){
            throw new Error("'UserId' is required field!")
        }
        const result = await this.postData.findByUserId(UserId);
        
        return result
       
    }
    findByType = async (type: POST_TYPE): Promise<ListPostOutputDTO | null> => {
       
        if(!type){
            throw new Error("'type' is required field!")
        }
        const result = await this.postData.findByType(type);
        
        return result
       
    }
    
}