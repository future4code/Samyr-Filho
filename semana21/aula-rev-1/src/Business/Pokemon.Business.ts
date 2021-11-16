import { PokemonData } from "../Data/Pokemon.Data";
import { Pokemon } from "./Model/Pokemon";

export class PokemonBusiness {
    private BaseDatabase : PokemonData
    constructor(pokemonData: PokemonData){
        this.BaseDatabase = pokemonData
    }
    findByRowId = async (rowId: any): Promise<Pokemon[] | Pokemon> => {
        let result
        if(rowId !== ':rowId'){
            result = await this.BaseDatabase.findByRowId(rowId);
        }else{
            result = await this.BaseDatabase.findAll()
        }
        
        return result
    }
    findAll = async (): Promise<Pokemon[]> => {
        const result = await this.BaseDatabase.findAll();
        return result
    }
    findByFilter = async (type: string, weather: string, page: number): Promise<Pokemon[]> => {
        
        const result =  await this.BaseDatabase.findByFilter(type, weather, page)
        return result
    }
}