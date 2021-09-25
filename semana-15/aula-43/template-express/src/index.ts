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

        if((!req.query.name) && (!req.query.capital) && (!req.query.continent)) {
            res.statusCode = 400
            throw new Error('Bad Request')
        };

        if(req.query.name) {
            result = result.filter((country) => {
                return country.name.includes(`${req.query.name}`)
            })
        };
        if(req.query.capital) {
            result = result.filter((country) => {
                return country.capital.includes(`${req.query.capital}`)
            })
        };
        
        if(req.query.continent){
            result = result.filter((country) => {
                return country.continent.includes(`${req.query.continent}`)
            })
        };

        res.send(result)
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
app.put('/countries/:id', (req: Request, res: Response) => {
    try {
        const ehNumber : number = Number(req.params.id) 
        if((!ehNumber) && (req.params.id !== '0')) {
            res.statusCode = 400
            throw new Error('Invalid id!')
        };
        
        if((!req.body.name) && (!req.body.capital)){
            res.statusCode = 400
            throw new Error('Bad Request')
        };

        const index = countries.findIndex((country) => {
            return country.id === Number(req.params.id)
        })
        
        if(index === -1){
            res.statusCode = 404
            throw new Error('id not found!')
        };

        if(req.body.name){
            countries[index].name = req.body.name    
        }

        if(req.body.capital){
            countries[index].capital = req.body.capital
        }
        res.send(countries[index])
    }
    catch (error: any) {
        res.send(error.message)
    }
})

app.delete('/countries/:id', (req: Request, res: Response) => {
    try {
        const ehNumber : number = Number(req.params.id) 
        if((!ehNumber) && (req.params.id !== '0')) {
            res.statusCode = 400
            throw new Error('Invalid id!')
        };

        if(!req.headers.authorization){
            res.statusCode = 404
            throw new Error('Authorization not found!')
        }

        const index = countries.findIndex((country) => {
            return country.id === Number(req.params.id)
        })

        if(index === -1){
            res.statusCode = 404
            throw new Error('id not found!')
        };

        if(req.headers.authorization !== "hsoeu460173") {
            res.statusCode = 401
            throw new Error('Not Authorization!')
        }

        countries.splice(index, 1)
        res.status(204).end()
    }
    catch (error: any) {
        res.send(error.message)
    }
})



