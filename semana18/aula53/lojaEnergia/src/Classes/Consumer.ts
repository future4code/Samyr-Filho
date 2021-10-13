import { Users } from "./Users";

export class Consumer extends Users {
    totalPurchases: number = 0;

    constructor(
        private creditCard: string,
        id: string,
        email: string, 
        name: string,
        password: string
    ) {
        super(id, email, name, password )
        this.creditCard = creditCard
        console.log("Chamando o construtor da classe Customer");
    }
    public getCreditCard(): string {
        return this.creditCard;
      }
}