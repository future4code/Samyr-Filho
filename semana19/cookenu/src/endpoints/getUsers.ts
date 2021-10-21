import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
export async function getUsers(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const userDatabase = new UserDatabase();
        const users = await userDatabase.getAllUsers();
        
        res.status(200).send(users)
    }
    catch (error: any) {
        if (typeof(error) === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}