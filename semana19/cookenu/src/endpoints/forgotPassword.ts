import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { transporter } from "../services/mailTransporter";
export async function forgotPassword(req: Request, res: Response) {
    try {
        const email  = req.body.email

        if (!email) {
            res.statusCode = 422
            throw "Preencha o campo 'email'!"
        }

        if (!email.includes("@")) {
            res.statusCode = 422
            throw "'email' inválido!"
        }
        const userDatabase = new UserDatabase();
        const user = await userDatabase.findUserByEmail(email);
        if(!user){
            res.statusCode = 409
            throw 'Email não cadastrado'
        }
        const token = new Authenticator().generateToken({ id: user.getId(), role: user.getRole() })

        transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: [
               "samyrh@schissa.com.br"
            ],
            subject: "Recuperação de senha",
            html: `
            <a href=" http://localhost:3003/user/putpassword/${token}">
                <button>
                    Redefinir
                </button>
            </a>
            ` ,
            text: `
               
            `
         })
         res.status(200).send("Email enviado!")
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