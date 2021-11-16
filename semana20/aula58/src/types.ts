export interface authenticationData{
    id: string,
    role: USER_ROLES
  }

  export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
  }

export interface user  {
    id: string
    name: string
    email: string
    password: string
    role: USER_ROLES
 }

 export const userTableName = "User_Arq"
 