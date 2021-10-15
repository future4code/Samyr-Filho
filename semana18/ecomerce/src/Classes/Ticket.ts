import { insertProduct, getProducts } from "../data/Products";
import { idGenaration } from "../function/idGeneration";
import { iProduct } from "../Interfaces/iProduct";
import { iTicket } from "../Interfaces/iTicket"



export class Ticket implements iTicket, iProduct {
    

    constructor(
        private tripOrigin: string,
        private tripDestin: string,
        // private id: number,
        // private name: string,
        // private description: string,
        // private sale: number
        
    ) { 
        
    }

    insert(name: string, description: string, sale: number){
        const id = idGenaration()
        return insertProduct(id, name, description, sale, "Ticket", this.tripOrigin, this.tripDestin)
    };

    list() {
        return getProducts()
    }

    insertTicket(name: string, 
                 description: string, 
                 sale: number, 
                 tripOrigin: string, 
                 tripDestin: string){
        this.tripOrigin = tripOrigin
        this.tripDestin = tripDestin
        this.insert(name, description, sale)
    };
}