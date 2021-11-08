export interface CommentsPost {
    id: string,
    userId: string,
    postId: string,
    comment: string,
    like: boolean
}

export interface CommentsPostInputDTO {
    id: string,
    comment: string
}

export interface LikePostInputDTO {
    id: string,
    like: boolean
}