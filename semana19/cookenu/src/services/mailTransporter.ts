import { config } from "dotenv"
import nodemailer from "nodemailer"


config()

const { NODEMAILER_USER, NODEMAILER_PASSWORD} = process.env

export const transporter = nodemailer.createTransport({
   host: "smtp.terra.com.br",
   port: 587,
   secure: false,
   auth: {
      user: NODEMAILER_USER,
      pass: NODEMAILER_PASSWORD
   },
   tls: { ciphers: "SSLv3" }
})