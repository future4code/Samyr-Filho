export enum POST_TYPE {
    EVENTO = "EVENTO",
    NORMAL = "NORMAL"
}

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