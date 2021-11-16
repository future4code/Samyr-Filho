import knex from "knex";

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
CREATE TABLE cookenu_Users (
   id varchar(255) PRIMARY KEY,
   name varchar(255) NOT NULL,
   email varchar(255) NOT NULL,
   password varchar(255) NOT NULL
   );
   
   CREATE TABLE cookenu_Recipe (
   id varchar(255) PRIMARY KEY,
   userId varchar(255) NOT NULL,
   title varchar(255) NOT NULL,
   descript varchar(255) NOT NULL,
   dateCriation DATE DEFAULT (CURRENT_DATE()),
   FOREIGN KEY (userID) REFERENCES cookenu_Users(id)
   );
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})