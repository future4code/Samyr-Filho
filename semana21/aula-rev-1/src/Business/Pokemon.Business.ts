import { BaseDatabase } from "../Data/BaseDatabase";
import { pokemonTableName } from "../Data/TableNames";
import { Pokemon } from "../Model/Pokemon";

export class PokemonBusiness {
    private BaseDatabase : BaseDatabase
    constructor(){
        this.BaseDatabase = new BaseDatabase()
    }
    findByRowId = async (rowId: string): Promise<Pokemon> => {
        const result = await this.BaseDatabase.connection(pokemonTableName)
            .where({rowId});
        return result[0]
    }
    findByFilter = async (type: string, weather: string, page: number): Promise<Pokemon[]> => {
    
        const limit = 10
        const offset = limit * (page - 1);
        const result =  await this.BaseDatabase.connection.raw(`
            SELECT * FROM ${pokemonTableName}
            WHERE (Type1 LIKE "%${type}%") OR (type2 LIKE "%${type}%") 
            OR (Weather1 LIKE "%${weather}%")OR (Weather2 LIKE "%${weather}%")
            LIMIT ${limit} OFFSET ${offset};
        `)
        return result
    }
}