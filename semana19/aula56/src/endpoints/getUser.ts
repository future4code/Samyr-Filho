import { Request, Response } from "express";
import { getUserById } from "../data/user/User";
import { Authenticator } from "../services/Authenticator";
import { userInfo, USER_ROLES } from "../types";
export default async function getUser(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        
        const user = await getUserById(tokenData.id);
        if(!user){
            res.statusCode = 404
            throw "Usuário não encontrado"
        }
        const result: userInfo = {
            id: user.id,
            email: user.email,
            role: user.role
        }
        res.status(200).send(result)
    }
    catch (error: any){
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}