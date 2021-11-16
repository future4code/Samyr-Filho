
export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface authenticationData{
    id: string,
    role: USER_ROLES
  }

export interface user  {
    id: string
    email: string
    password:string
    role: USER_ROLES
 }
 export interface userInfo {
     id: string
     email: string
     role: USER_ROLES
 }