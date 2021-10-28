import { POST_TYPE } from "../../Model/Post";


export interface Post {
    id: string,
    description: string,
    photoURL: string,
    creationDate: Date,
    type: POST_TYPE
}
export interface PostInputDTO {
    description: string,
    photoURL: string,
    creationDate: Date,
    type: POST_TYPE
}

export interface PostMethods {
    create(post: PostInputDTO): Promise<void>
    findById(id: string): Promise<Post>
}