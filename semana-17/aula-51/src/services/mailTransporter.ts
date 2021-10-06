import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export const transporter = nodemailer.createTransport({
   // host: "smtp.gmail.com",
   host: "smtp.terra.com.br",
   port: 587,
   // port: 110,
   secure: false,
   auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
   },
   tls: { ciphers: "SSLv3" }
})