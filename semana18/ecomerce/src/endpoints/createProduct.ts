import { Request, Response } from "express";
import { Product } from "../Classes/Product";

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const sale = Number(req.body.sale);
        
        if((!name) || (!description) || isNaN(sale)){
            res.statusCode = 422;
            throw "'name' ou 'description' ou 'sale' inválidos";
        }
        const product = new Product();
        if (!await product.insert(name, description, sale)) {
            res.statusCode = 500;
            throw "Erro na criação do produto!";
        }
        
        res.status(201).send("produto criado!");
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