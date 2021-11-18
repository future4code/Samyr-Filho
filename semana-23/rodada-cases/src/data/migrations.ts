import knex from "knex";
import dotenv from "dotenv"
import contributorJson from "./contributor.json"

dotenv.config();

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true,
    },
});

// const baseDataBase = new BaseDataBase();
const creationTables = async(): Promise<boolean> => {
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS caseCubo_contributor (
            id VARCHAR(64) PRIMARY KEY,
            firstName VARCHAR(255),
            lastName VARCHAR(255),
            participation INT
        )
        `);
        console.log("Table created successfully");
        return true
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
}

const clearContributor = async (): Promise<boolean> => {
    try {
        await connection('caseCubo_contributor').delete();

        console.log("Contributors cleared successfully!");
        return true;
    } catch (e) {
        const error = e as Error;
        console.log(error);
        return false;
    }
};

const closeConnection = () => { connection.destroy(); };

creationTables()
    .then(clearContributor)
    .finally(closeConnection);