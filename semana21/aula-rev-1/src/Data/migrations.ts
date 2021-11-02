import knex from "knex";
import { pokemonTableName } from "./TableNames";
import dotenv from 'dotenv'

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
connection.raw(`
   CREATE TABLE IF NOT EXISTS ${pokemonTableName}(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      Pokedex_Number INT NOT NULL,
      Img_name INTEGER NOT NULL,
      Generation INTEGER NOT NULL,
      Evolution_Stage INTEGER NOT NULL,
      Evolved BOOLEAN,
      FamilyID INTEGER NOT NULL,
      Cross_Gen BOOLEAN,
      Type1 VARCHAR(255),
      Type2 VARCHAR(255),
      Weather1 VARCHAR(255),
      Weather2 VARCHAR(255),
      STAT_TOTAL INTEGER NOT NULL,
      ATK INTEGER NOT NULL,
      DEF INTEGER NOT NULL,
      STA INTEGER NOT NULL,
      Legendary INTEGER NOT NULL,
      Aquireable INTEGER NOT NULL,
      Spawns INTEGER NOT NULL,
      Regional INTEGER NOT NULL,
      Raidable INTEGER NOT NULL,
      Hatchable INTEGER NOT NULL,
      Shiny INTEGER NOT NULL,
      Nest INTEGER NOT NULL,
      New INTEGER NOT NULL,
      NotGettable INTEGER NOT NULL,
      Future_Evolve INTEGER NOT NULL,
      CP40 INTEGER NOT NULL,
      CP39 INTEGER NOT NULL
   );
   
`).then(() => {
   console.log("Table(s) were successfully created!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})