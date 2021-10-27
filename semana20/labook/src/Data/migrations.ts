import knex from "knex";
import { commentsPostsTableName, postsTableName, usersTableName } from "./TableNames";

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
   CREATE TABLE IF NOT EXISTS ${usersTableName}(
      id VARCHAR(64) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(64) NOT NULL
   );
   CREATE TABLE IF NOT EXISTS ${postsTableName}(
      id VARCHAR(64) PRIMARY KEY,
      userId VARCHAR(64) NOT NULL,
      description TEXT NOT NULL,
      photoURL VARCHAR(255) NOT NULL,
      type ENUM("EVENTO", "NORMAL") NOT NULL,
      FOREIGN KEY (userId) REFERENCES LaBook_Users(id)
   );
   CREATE TABLE IF NOT EXISTS ${commentsPostsTableName}(
      id VARCHAR(64) PRIMARY KEY,
      userId VARCHAR(64) NOT NULL,
      postId VARCHAR(64) NOT NULL,
      comment TEXT NOT NULL,
      userLike BOOLEAN,
      FOREIGN KEY (userId) REFERENCES LaBook_Users(id),
      FOREIGN KEY (postId) REFERENCES LaBook_Posts(id)
   );
`).then(() => {
   console.log("Table(s) were successfully created!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})