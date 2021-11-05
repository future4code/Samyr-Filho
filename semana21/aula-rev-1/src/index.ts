import app from "./app"
import { PokemonController } from "./Controller/Pokemon.Controller"
import { Router } from "express"

const pokemon = new PokemonController();




app.get("/pokemon/:rowId", pokemon.findByRowId)
app.get("/pokemon", pokemon.findByFilter)





