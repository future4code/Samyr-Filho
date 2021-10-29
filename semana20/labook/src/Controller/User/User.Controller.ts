import { Request, Response } from "express"
import { authenticationData } from "../../Business/User/iUserBusiness";
import { UserBusiness } from "../../Business/User/UserBusinnes"
import { UserData } from "../../Data/UserData"
import { Authenticator } from "../../services/Authenticator";

export default class UserController {

    private userBusiness: UserBusiness;

    constructor(){
        this.userBusiness = new UserBusiness(new UserData())
    }

    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body
    
            const token = await this.userBusiness.signup({ name, email, password })
            res.status(200).send({"token": token})
        }
        catch (error: any) {
            if (typeof(error) === "string") {
                res.send(error)
            } else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! An unexpected error has occurred =/!")
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
                res.status(500).send("Ops! An unexpected error has occurred =/!")
            }
        }
    }
    makeFriend = async (req: Request, res: Response) => {
        try {
            const friendId = req.params.friendId
            const token: string = req.headers.authorization;
            const isTokenValid: authenticationData = new Authenticator().getTokenData(token);
            if(!isTokenValid){
                throw new Error("Invalid, expired or missing token from header 'Authorization' key")
            }
            await this.userBusiness.makeFriend(isTokenValid.id, friendId)

        } catch (error: any) {
            if (typeof(error) === "string") {
                res.send(error)
            } else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! An unexpected error has occurred =/!")
            }
        }
    }

    unMakeFriend = async (req: Request, res: Response) => {
        try {
            const friendId = req.params.friendId
            const token: string = req.headers.authorization;
            const isTokenValid: authenticationData = new Authenticator().getTokenData(token);
            if(!isTokenValid){
                throw new Error("Invalid, expired or missing token from header 'Authorization' key")
            }
            await this.userBusiness.unMakeFriend(isTokenValid.id, friendId)

        } catch (error: any) {
            if (typeof(error) === "string") {
                res.send(error)
            } else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! An unexpected error has occurred =/!")
            }
        }
    }
}