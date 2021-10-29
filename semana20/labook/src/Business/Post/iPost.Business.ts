import { Post, POST_TYPE } from "../../Model/Post";


export interface PostInputDTO {
    userId: string,
    description: string,
    photoURL: string,
    creationDate: string,
    type: POST_TYPE
}

export interface PostOutputDTO {
    id: string,
    userId: string,
    description: string,
    photoURL: string,
    creationDate: string,
    type: POST_TYPE
}
export interface ListPostOutputDTO {
    list: PostOutputDTO[]
}

export interface PostMethods {
    create(post: Post): Promise<void>
    findById(id: string): Promise<PostOutputDTO>
    findByUserId(UserId: string): Promise<any>
    findByType(type: POST_TYPE): Promise<any>
}