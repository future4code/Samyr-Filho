import { Request, Response } from "express";
import { FollowDatabase } from "../data/FollowDatabase";
import { Authenticator } from "../services/Authenticator";
export async function followUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const userToFollowId = req.body.userToFollowId;
        if(!userToFollowId){
            res.statusCode = 422
            throw "Preencha o parametro 'userToFollowId' no body!"
        }
        if(tokenData.id === userToFollowId){
            res.statusCode = 400
            throw "Usuário logado não pode seguir a si mesmo!"
        }
        await new FollowDatabase().followUser(tokenData.id, userToFollowId);
        res.status(200).send({"message": "Followed successfully!"})
    } catch  (error: any) {
        if (typeof(error) === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}