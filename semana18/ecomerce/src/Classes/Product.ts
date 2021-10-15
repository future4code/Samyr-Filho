import { getProducts, insertProduct } from "../data/Products"
import { idGenaration } from "../function/idGeneration"
import { iProduct } from "../Interfaces/iProduct"



export class Product implements iProduct {


    constructor(

    ) { 
        
    }
    insert(name: string, description: string, sale: number){
        const id = idGenaration()
        return insertProduct(id, name, description, sale, "Product", "", "")
    };

    list() {
        return getProducts()
    }
}