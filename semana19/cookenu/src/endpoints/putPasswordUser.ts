import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
export async function putPassword(req: Request, res: Response) {
    try {
        const { token, password } = req.body

        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        
        if (!password) {
            res.statusCode = 422
            throw "Preencha o campo 'password'!"
        }

        if (password.length < 6){
            res.statusCode = 400
            throw "A senha tem que ter no mínimo 6 caracteres"
        }
        
        const userDatabase = new UserDatabase();
        await userDatabase.putPasswordById(tokenData.id, password);
        res.status(200).send("Senha alterada!")
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