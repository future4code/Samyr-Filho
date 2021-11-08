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

export interface CommentPost {
    id: string,
    userId: string,
    postId: string,
    comment: string
}

export interface CommentsPostInputDTO {
    userId: string,
    postId: string,
    comment: string
}

export interface PostMethods {
    create(post: Post): Promise<void>
    findById(id: string): Promise<PostOutputDTO>
    findByUserId(UserId: string, page: number): Promise<any>
    findByType(type: POST_TYPE): Promise<any>
    likePost(postId: string, userId: string): Promise<string>
    unLikePost(postId: string, userId: string): Promise<string>
    commentPost(commentPost: CommentPost): Promise<void>;
}