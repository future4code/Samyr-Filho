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
    findFriendByIdFriend(userid: string, friendId: string): Promise<User | null>;
    makeFriends(userId: string, friendId: string): Promise<void>;
    unMakeFriends(userId: string, friendId: string): Promise<void>;
}