import { USER_ROLES } from "./model/users/user";


export interface authenticationData{
    id: string
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