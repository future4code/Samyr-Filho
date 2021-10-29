import { Post, POST_TYPE } from "../../Model/Post";


export interface PostInputDTO {
    userId: string,
    description: string,
    photoURL: string,
    creationDate: string,
    type: POST_TYPE
}

export interface PosOutputDTO {
    id: string,
    userId: string,
    description: string,
    photoURL: string,
    creationDate: string,
    type: POST_TYPE
}

export interface PostMethods {
    create(post: Post): Promise<void>
    findById(id: string): Promise<PosOutputDTO>
}