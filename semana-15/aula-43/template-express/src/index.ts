import express, { Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Server is online at http://localhost:3003.")
})



app.get('/countries', (req : Request, res: Response) => {
        res.status(200).send(countries)
})

app.get('/countries/search', (req: Request, res: Response) => {
    
    try {
        let result = [...countries]
        const name = req.query.name;
        const capital = req.query.capital;
        const continent = req.query.continent;

        if((!req.query.name) && (!req.query.capital) && (!req.query.continent)) {
            res.statusCode = 400
            throw new Error('Bad Request ' + req.query.name + ' ' + req.query.capital)
        };

        if(req.query.name) {
            result = result.filter((country) => {
                return country.continent.includes(`${name}`)
            })
        };
        if(req.query.capital) {
            result = result.filter((country) => {
                return country.continent === req.query.capital
            })
        };
        
        if(req.query.continent){
            result = result.filter((country) => {
                return country.continent === req.query.continent
            })
        };

        res.send(result)
            // 
        // && (req.params.capital === '') && (req.params.continent === '')){
    }
    catch (error: any) {
        res.send(error.message)
    }
    
})
app.get('/countries/:id', (req: Request, res: Response) => {
    try {
        const ehNumber : number = Number(req.params.id) 
        if((!ehNumber) && (req.params.id !== '0')) {
            res.statusCode = 400
            throw new Error('Invalid id!')
        };
        const result = countries.find((country) => country.id === Number(req.params.id))
        if(!result){
            res.statusCode = 404
            throw new Error('id not found!')
        };
        res.send(result)
    }
    catch (error: any) {
        res.send(error.message)
    }
})



