import { iPurchase } from "../Interfaces/iPurchase"


export class Purchase implements iPurchase {
    
    constructor(
        private id: number,
        private productID: number,
        private userID: number, 
        private amount: number
    ) {
       
    }
    setProductID(value : number) {
        this.productID = value
    };
    setUserID(value: number) {
        this.userID = value
    };
    setAmount(value: number) {
        this.amount = this.amount
    };
}