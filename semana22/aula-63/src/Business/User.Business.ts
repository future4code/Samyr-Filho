import { User } from "./iUser";

export class UserBusiness {
    constructor(){}
    performPurchase = (user: User, value: number): User | undefined => {
        if(user.balance >= value){
            return {...user,
            balance: user.balance - value}
        } else {
            return undefined
        }
    }
}