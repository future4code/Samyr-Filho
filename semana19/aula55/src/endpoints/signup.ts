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
      throw new Error("Preencha os campos 'email' e 'password'")
    }

    const [user] = await connection('Aula55_User')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    const id: string = new IdGenerator().generateId()

    const newUser: user = { id, email, password }

    await createUser(newUser)

    const token = new Authenticator().generateToken({ id })

    res.status(201).send({ newUser, token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.sqlMessage || error.message })
    }
  }
}