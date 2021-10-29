import { Request, Response } from "express";
import { PosOutputDTO, PostInputDTO } from "../../Business/Post/iPost.Business";
import { PostBusiness } from "../../Business/Post/Post.Business";
import { authenticationData } from "../../Business/User/iUserBusiness";
import { PostData } from "../../Data/PostData";
import { Post } from "../../Model/Post";
import { Authenticator } from "../../services/Authenticator";

export class PostController {
    private postBusiness : PostBusiness

    constructor(){
        this.postBusiness = new PostBusiness(new PostData())
    }
    create = async (req: Request, res: Response) => {
        try {
            const {description, photoURL, creationDate, type}: PostInputDTO = req.body;
            
            const token: string = req.headers.authorization;

            const isTokenValid: authenticationData = new Authenticator().getTokenData(token);
            if(!isTokenValid){
                throw new Error("Invalid, expired or missing token from header 'Authorization' key")
            }
            
            const newPost = await this.postBusiness.create({userId: isTokenValid.id, 
                                                            description, 
                                                            photoURL, 
                                                            creationDate, 
                                                            type});
            
            res.status(200).send({"Post created successfully": newPost});

        } catch (error: any) {
            if (typeof(error) === "string") {
                res.send(error)
            } else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! An unexpected error has occurred =/!")
            }
        }
    }
    findPostById = async (req: Request, res: Response) => {
        const id: string = req.params.id;
        const token: string = req.headers.authorization;
        const isTokenValid: authenticationData = new Authenticator().getTokenData(token);
        if(!isTokenValid){
            throw new Error("Invalid, expired or missing token from header 'Authorization' key")
        }
        
        const resultPost: PosOutputDTO = await this.postBusiness.findByid(id);

        res.status(200).send(resultPost)
    }
}