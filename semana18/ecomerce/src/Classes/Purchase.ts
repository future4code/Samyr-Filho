import { iPurchase } from "../Interfaces/iPurchase"


export class Purchase implements iPurchase {
    
    constructor(
        private id: number,
        private productID: number,
        private userID: number, 
        private amount: number,
        private total: number
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
        // var crypto = requestAnimationFrame(()=>5);
        // var strid = crypto.randomBytes(20).toString('hex');
        const varid = Math.random().toString(36).substr(2, 5);
    };
    // const uniqueID = UUID.randomUUID().toString();
    

}

// const uniqueID = UUID.randomUUID().toString();