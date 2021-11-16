import { config } from "dotenv"
import { Request, Response } from "express"
import app from "./app"
import { PokemonController } from "./Controller/Pokemon.Controller"
import { BaseDatabase } from './Data/BaseDatabase'
// import * as pokemons from "./Data/PokemonGo.json"
import { pokemonTableName } from "./Data/TableNames"
import { Pokemon } from "./Model/Pokemon"




config()

const pokemon = new PokemonController();
app.post("/pokemon", async (req: Request, res: Response)=> {
    try {
            res.status(201).send("Registros inseridos!")
        
    } catch (error: any) {
        res.status(500).send({"erro":error})
    }
})

app.get("/pokemon/:rowId", pokemon.findByRowId)
app.get("/pokemon", pokemon.findByFilter)




