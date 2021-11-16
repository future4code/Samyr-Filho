import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
export async function delUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho!"
        }
        const id = req.params.id;
        if(!id){
            res.statusCode = 422
            throw "Preencha o parametro 'id'!"
        }
        if(tokenData.role !== "ADMIN"){
            res.statusCode = 403
            throw "Você não é administrador. Operação não efetuada!"
        }
        await new UserDatabase().delUserByID(id)
        res.status(200).send("Exclusão efetuada!")
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