
import { user, userTableName } from "../types";
import { BaseDatabase } from "./BaseDatabase";
export class UserData extends BaseDatabase {
    
    public async findUserByEmail(email: string): Promise<user> {
        try {
            const user: user[] = await BaseDatabase.connection(userTableName)
                .select("*")
                .where({email});
                return user[0]
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async delUserByID(id: string) {
        try {
            await BaseDatabase.connection(userTableName)
                .delete()
                .where({id});
                return 
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async createUser (user: user) {
        try {
            await BaseDatabase.connection(userTableName)
            .insert(
                user
            ); 
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async getAllUsers(): Promise<user[]> {
        try {
            const users = await BaseDatabase.connection(userTableName)
                .select("*");
                return users
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
}
