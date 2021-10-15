import { Request, Response } from "express";
import { Product } from "../Classes/Product";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = new Product();
        const listproducts = await product.list();
        if (!listproducts) {
            res.statusCode = 500;
            throw "Erro na listagem de produtos!";
        }
        
        res.status(200).send(listproducts);
    }
    catch (error: any) {
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
} 