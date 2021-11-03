import { config } from "dotenv"
import { Request, Response } from "express"
import app from "./app"
import { headers } from "./Data/convertExcelXJson"


config()

app.get("/poke", (req: Request, res: Response)=> {
    try {
        const result = headers('.//Pokemon Go.xlsx')
        res.status(200).send({"resultado": result})
    } catch (error: any) {
        res.status(500).send({"erro":error})
    }
})



