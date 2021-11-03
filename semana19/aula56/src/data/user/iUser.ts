import { user, USER_ROLES } from "../../types";

export interface iMetodoUserInsert {
    setEmail(value: string): iMetodoUserInsert;
    setPassword(value: string): any;
    setRole(value: USER_ROLES): any;
    end(): user;
}

export interface iMetodoUserUpdate {

}

export interface iMetodoUserDelete {

}

export interface iMetodosUser {
    insert: iMetodoUserInsert;
    update: iMetodoUserUpdate;
    delete: iMetodoUserDelete;

}

export interface iUser {
    metodos: iMetodosUser;
}