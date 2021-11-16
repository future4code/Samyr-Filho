import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw "Preencha os campos 'email' e 'password'"
        }


        if (!email.includes("@")) {
            res.statusCode = 422
            throw "'email' inválido"
        }

        if (password.length < 6){
            res.statusCode = 400
            throw "A senha tem que ter no mínimo 6 caracteres"
        }
        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);
        if(!user){
            res.statusCode = 409
            throw 'Email não cadastrado'
        }
        
        const passwordIsCorrect = new HashManager().compareHash(password, user.getPassword());

        if(!passwordIsCorrect){
            res.statusCode = 401
            throw 'Email ou senha não conferem!'
        }

        const token = new Authenticator().generateToken({ id: user.getId() })
        res.status(200).send({message:"Usuário logado com sucesso!", token})

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