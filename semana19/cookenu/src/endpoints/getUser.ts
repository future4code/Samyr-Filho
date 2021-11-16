import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
export async function getUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const id = req.params.id;
        if(!id){
            res.statusCode = 422
            throw "Preencha o parametro 'id'"
        }
        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByID(id);
        if(!user){
            res.statusCode = 409
            throw "Usuário não encontrado!"
        }
        res.status(200).send(user)
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