import knex from "knex";
import { pokemonTableName } from "./TableNames";
import dotenv from 'dotenv'
import pokemons from "./PokemonGo.json"

dotenv.config()

const connection = knex({
   client: 'mysql',
   connection: {
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_SCHEMA,
       port: 3306,
       multipleStatements: true
   }
})

export const migration = async () => {
   try {
     await connection.raw(`
         CREATE TABLE IF NOT EXISTS ${pokemonTableName}(
            Name VARCHAR(255),
            Pokedex_Number VARCHAR(255),
            Img_name VARCHAR(255),
            Generation VARCHAR(255),
            Evolution_Stage VARCHAR(255),
            Evolved VARCHAR(255),
            FamilyID VARCHAR(255),
            Cross_Gen VARCHAR(255),
            Type1 VARCHAR(255),
            Type2 VARCHAR(255),
            Weather1 VARCHAR(255),
            Weather2 VARCHAR(255),
            STAT_TOTAL VARCHAR(255),
            ATK VARCHAR(255),
            DEF VARCHAR(255),
            STA VARCHAR(255),
            Legendary VARCHAR(255),
            Aquireable VARCHAR(255),
            Spawns VARCHAR(255),
            Regional VARCHAR(255),
            Raidable VARCHAR(255),
            Hatchable VARCHAR(255),
            Shiny VARCHAR(255),
            Nest VARCHAR(255),
            New VARCHAR(255),
            NotGettable VARCHAR(255),
            Future_Evolve VARCHAR(255),
            CP40 VARCHAR(255),
            CP39 VARCHAR(255),
            RowID VARCHAR(255)
         );
         
      `)
      // console.log("Tabela criada!")

      pokemons.forEach((pokemon: any)=>{
         pokemon.RowId = pokemon.Row
         delete pokemon.Row 
      }) 
      // console.log(pokemons[0])
      await connection(pokemonTableName).insert(pokemons)
      
   } catch (error) {
      console.log(error);
   } finally {
      connection.destroy()
   }
}

migration()
