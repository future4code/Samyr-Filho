import { Request, Response } from "express";
import { Users } from "../Classes/Users";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = new Users();
        const listUsers = await users.list();
        if (!listUsers) {
            res.statusCode = 500;
            throw "Erro na listagem de usuários!";
        }
        
        res.status(200).send(listUsers);
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