import { Request, Response } from "express"
import { UserBusiness } from "../../Business/UserBusinnes"
import { iMetodosUserController } from "./iUser.Controller"

export default class UserMetodosController implements iMetodosUserController  {
    async signup(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body
    
            const token = await new UserBusiness().signup({ name, email, password, role })
            res.status(200).send({"token": token})
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

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
    
            const token = await new UserBusiness().login({ email, password })
            
            res.status(200).send({"token": token})
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

    async getUsers(req: Request, res: Response) {
        try {
            const token = req.headers.authorization;
            
            const userBusiness = new UserBusiness();
            const users = await userBusiness.getUsers(token);
            
            res.status(200).send(users)
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

    async delete(req: Request, res: Response) {
        try {
            const token = req.headers.authorization;
            const id = req.params.id;
            await new UserBusiness().delete(token, id)
            res.status(200).send("Exclusão efetuada!")
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
}