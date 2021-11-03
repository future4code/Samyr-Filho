import { Request, Response } from "express";
import { delUser, getUserById } from "../data/user/User";
import { Authenticator } from "../services/Authenticator";
export default async function deleteUser (req: Request, res: Response): Promise<void>{
    try {
        const id: string = req.params.id;
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(tokenData.role !== "ADMIN") {
            res.statusCode = 403
            throw "Você não tem permissão para deletar um usuário!"
        }
        if(!id){
            res.statusCode = 422
            throw "'id' é obrigatório!"
        }
        const user = await getUserById(id);
        if(!user){
            res.statusCode = 404
            throw "Usuário não encontrado"
        }
        await delUser(id)
        res.status(200).send("usuário deletado!")

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