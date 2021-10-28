import { Request, Response } from "express"
import { UserBusiness } from "../../Business/User/UserBusinnes"
import { UserData } from "../../Data/UserData"

export default class UserController {

    private userBusiness: UserBusiness;

    constructor(){
        this.userBusiness = new UserBusiness(new UserData())
    }

    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role } = req.body
    
            const token = await this.userBusiness.signup({ name, email, password, role })
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

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
    
            const token = await this.userBusiness.login({ email, password })
            
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
}