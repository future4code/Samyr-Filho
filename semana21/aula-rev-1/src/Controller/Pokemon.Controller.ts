import { Request, Response } from "express";
import { PokemonBusiness } from "../Business/Pokemon.Business";
import { PokemonData } from "../Data/Pokemon.Data";

export class PokemonController {
    private pokemonBusiness: PokemonBusiness

    constructor(){
        this.pokemonBusiness = new PokemonBusiness(new PokemonData());
    }
    findByRowId = async (req:Request, res: Response): Promise<void> => {
        try {
            const rowId = req.params.rowId;
            
            const result = await this.pokemonBusiness.findByRowId(rowId);
            res.status(200).send(result)
            
        } catch (error: any) {
            if (typeof(error) === "string") {
                res.send(error)
            } else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! Um erro inesperado ocorreu =/")
            }
        }
    }
    findByFilter = async (req:Request, res: Response) => {
        try {
            const type = String(req.query.type || "%");
            const weather = String(req.query.weather || "%");
            let page = Number(req.query.page);
            if(isNaN(page)){
                page = 0
            }
            const result = await this.pokemonBusiness.findByFilter(type, weather, page);
            res.status(200).send(result);
        }catch (error: any) {
            if (typeof(error) === "string") {
                res.send(error)
            } else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! Um erro inesperado ocorreu =/")
            }
        }
        
    }
}