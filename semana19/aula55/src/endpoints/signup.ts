import { Request, Response } from "express";
import { connection } from "../data/connection";
import { createUser } from "../data/user/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";

import { user } from "../types";

export default async function signup(
  req: Request,
  res: Response
): Promise<void> {
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

    const [user] = await connection('Aula55_User')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw 'Email já cadastrado'
    }

    const id: string = new IdGenerator().generateId()

    const newUser: user = { id, email, password }

    await createUser(newUser)

    const token = new Authenticator().generateToken({ id })

    res.status(201).send({ newUser, token })

  } catch (error: any) {

    if (typeof error === "string") {

       res.send(error)
    } else {
       
       console.log(error.sqlMessage || error.message);
       res.status(500).send("Ops! Um erro inesperado ocorreu =/")
    }
  }
}