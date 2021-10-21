import { Request, Response } from "express";
import { FollowDatabase } from "../data/FollowDatabase";
import { Authenticator } from "../services/Authenticator";
export async function unfollowUser(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const userToUnfollowId = req.body.userToUnfollowId;
        if(!userToUnfollowId){
            res.statusCode = 422
            throw "Preencha o parametro 'userToUnfollowId' no body!"
        }
        await new FollowDatabase().unfollowUser(tokenData.id, userToUnfollowId);
        res.status(200).send({"message": "Unfollowed successfully!"})
    } catch  (error: any) {
        if (typeof(error) === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}