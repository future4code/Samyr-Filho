import { BaseDatabase } from "../Data/BaseDatabase";
import { pokemonTableName } from "../Data/TableNames";
import { Pokemon } from "../Model/Pokemon";

export class PokemonBusiness {
    private BaseDatabase : BaseDatabase
    constructor(){
        this.BaseDatabase = new BaseDatabase()
    }
    findByRowId = async (rowId: number): Promise<Pokemon> => {
        const result = await this.BaseDatabase.connection(pokemonTableName)
            .where({rowId});
        return result[0]
    }
    findByFilter = async (type: string, Weather: string, page: number): Promise<Pokemon[]> => {
        const offset = 10 * (page - 1);
        const result = await this.BaseDatabase.connection(pokemonTableName)
            .where("Type1", "LIKE", `%${type}%`)
            .andWhere("Type2", "LIKE", `%${type}%`)
            .andWhere("Weather1", "LIKE", `%${Weather}%`)
            .andWhere("Weather2", "LIKE", `%${Weather}%`)
            .limit(10)
            .offset(offset)
        return result
    }
}