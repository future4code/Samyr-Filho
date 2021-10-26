export enum POST_TYPE {
    EVENTO = "EVENTO",
    NORMAL = "NORMAL"
}

export interface UserInfo {
    id: string,
    description: string,
    photoURL: string,
    creationDate: Date,
    type: POST_TYPE
}