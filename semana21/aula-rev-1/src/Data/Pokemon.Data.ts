import { Pokemon } from "../Business/Model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";
import { pokemonTableName } from "./TableNames";

export class PokemonData extends BaseDatabase{
    findAll = async ():Promise<Pokemon[]> => {
        const result = await BaseDatabase.connection(pokemonTableName);
    return result 
    }
    findByRowId = async (rowId: string):Promise<Pokemon> => {
        const result = await BaseDatabase.connection(pokemonTableName)
        .where({rowId});
    return result[0] 
    }
    findByFilter = async (type: string, weather: string, page: number): Promise<Pokemon[]> => {
        const limit = 10
        const offset = limit * (page - 1);
        
        const result = await BaseDatabase.connection.raw(`
            SELECT * FROM ${pokemonTableName}
            WHERE ((Type1 LIKE "%${type}%") OR (type2 LIKE "%${type}%"))
            AND ((Weather1 LIKE "%${weather}%")OR (Weather2 LIKE "%${weather}%"))
            LIMIT ${limit} OFFSET ${offset};
        `)
        return result[0]
    }
}