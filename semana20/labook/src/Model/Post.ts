export enum POST_TYPE {
    EVENTO = "EVENTO",
    NORMAL = "NORMAL"
}

export interface PostInfo {
    id: string,
    description: string,
    photoURL: string,
    creationDate: Date,
    type: POST_TYPE
}
