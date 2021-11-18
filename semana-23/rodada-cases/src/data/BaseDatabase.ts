import dotenv from "dotenv";
import knex, { Knex } from "knex";

dotenv.config();

export abstract class BaseDatabase {
   constructor(
      protected tableName: string
  ) { }

  private static connection: Knex | null = null;

  protected Connection(): Knex{
      if(!BaseDatabase.connection){
          BaseDatabase.connection = knex({
              client: "mysql",
              connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_SCHEMA,
                multipleStatements: true
              },
            });        
      }

      return BaseDatabase.connection;
  }

  public static async destroyConnection(): Promise<void>{
      if(BaseDatabase.connection){
          await BaseDatabase.connection.destroy();
          BaseDatabase.connection = null;
      }
  }
}
