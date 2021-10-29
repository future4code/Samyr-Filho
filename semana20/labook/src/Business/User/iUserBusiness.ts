import { User } from "../../Model/User";

export interface UserInputDTO {
    name: string
    email: string
    password: string
}

export interface LoginInputDTO {
    email: string
    password: string
}

export interface authenticationData{
    id: string
    }

export interface UserMethods {
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    makeFriends(id: string, friendId: string): Promise<void>;
    unMakeFriends(id: string, friendId: string): Promise<void>;
}