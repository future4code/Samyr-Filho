import { Request, Response } from "express";
import { getUserByEmail } from "../data/user/User";
import { Authenticator } from "../services/Authenticator";
export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body
        
        if (!email || !password) {
            res.statusCode = 422
            throw "'email' e 'senha' são obrigatórios"
        }
        if (!email.includes("@")) {
            res.statusCode = 422
            throw "'email' inválido"
        }
    
        if (password.length < 6){
            res.statusCode = 400
            throw "A senha tem que ter no mínimo 6 caracteres"
        }
        
        const user = await getUserByEmail(email);
        if(!user || user.password !== password){
            res.statusCode = 401
            throw "O email e a senha não conferem"
        }
        const token = new Authenticator().generateToken({id: user.id});

        res.status(200).send(token)

    }
    catch(error: any){
        if(typeof error === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
    
}