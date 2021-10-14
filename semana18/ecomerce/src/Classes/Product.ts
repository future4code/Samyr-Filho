import { iProduct } from "../Interfaces/IProduct"


export class Product implements iProduct {


    constructor(
        private id: number,
        private name: string,
        private description: string,
        private sale: number
    ) { 
        
    }
    setName(value : string){
        this.name = value
    };
    setDescription(value: string){
        this.description = value
    };
    setSale(value: number){
        this.sale = value
    };
}