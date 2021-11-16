import { Request, Response } from "express";
import { PokemonBusiness } from "../Business/Pokemon.Business";

export class PokemonController {
    private pokemonBusiness: PokemonBusiness

    constructor(){
        this.pokemonBusiness = new PokemonBusiness();
    }
    findByRowId = async (req:Request, res: Response) => {
        try {
            const rowId = Number(req.params.rowId);
            const result = await this.pokemonBusiness.findByRowId(rowId);
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send("erro ao buscar pokemon por Row")
        }
    }
    findByFilter = async (req:Request, res: Response) => {
        try {
            const type = req.body.type
            const weather = req.body.weather
            const page = Number(req.body.page)
            const result = this.pokemonBusiness.findByFilter(type, weather, page)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send("erro ao buscar pokemon por Row")
        }
        
    }
}