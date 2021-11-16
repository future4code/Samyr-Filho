import knex from "knex";
import { userTableName } from "../types";

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
CREATE TABLE IF NOT EXISTS ${userTableName}(
   id VARCHAR(255) PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   role VARCHAR(255) DEFAULT "NORMAL"
   );
`).then(() => {
   console.log("Table(s) were successfully created!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})