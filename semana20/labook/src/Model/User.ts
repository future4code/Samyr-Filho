
export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
    }

export interface authenticationData{
    id: string,
    role: USER_ROLES
    }

export const userTableName = "LaBook_User"

 
export interface user  {
    id: string
    name: string
    email: string
    password: string
    role: USER_ROLES
    }