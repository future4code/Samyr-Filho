import { PostData } from "../../Data/PostData";
import { Post } from "../../Model/Post";
import { Function } from "../../services/Functions";
import { IdGenerator } from "../../services/IdGenerator";
import { PosOutputDTO, PostInputDTO } from "./iPost.Business";

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
        
        if(!type){
            throw new Error("field 'type' must be of type 'EVENT' or 'NORMAL'!")
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
    findByid = async (id: string): Promise<PosOutputDTO> => {
       
        if(!id){
            throw new Error("'id' is required field!")
        }
        
        const result = await this.postData.findById(id);
        
        return result
       
    }
    
}