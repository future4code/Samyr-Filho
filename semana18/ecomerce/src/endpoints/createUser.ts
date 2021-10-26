import { Request, Response } from "express";
import { Users } from "../Classes/Users";
import { connection } from "../data/connection";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const age = Number(req.body.age);
        
        if((!name) || (!email) || isNaN(age)){
            res.statusCode = 422;
            throw "'name' ou 'email' ou 'age' inválidos";
        }
        const user = new Users();
        if (!await user.insert(name, email, age)) {
            res.statusCode = 500;
            throw "Erro na criação do usuário!";
        }
        
        res.status(201).send("Usuário criado!");
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