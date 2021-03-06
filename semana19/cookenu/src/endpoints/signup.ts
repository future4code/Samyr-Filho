import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";

import { User } from "../model/users/user";

import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
export async function signup(req: Request, res: Response) {
    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw "Preencha os campos 'name', 'email'e 'password'"

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
        if(user){
            res.statusCode = 409
            throw 'Email já cadastrado'
        }
        const id: string = new IdGenerator().generateId()

        const cipherPassword = new HashManager().generateHash(password);
        const newUser = new User(id, name, email, cipherPassword);
        await userDatabase.createUser(newUser);
        const token = new Authenticator().generateToken({ id })
        res.status(200).send(token)

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