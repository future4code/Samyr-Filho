
import { User } from "../model/users/User";
import { userTableName } from "../types";
import { BaseDatabase } from "./BaseDatabase";
import { FollowDatabase } from "./FollowDatabase";
import { RecipeDatabase } from "./RecipeDatabase";

export class UserDatabase extends BaseDatabase {
    
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(userTableName)
                .select("*")
                .where({email});
                return user[0] && User.toUserModel(user[0])
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async findUserByID(id: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection(userTableName)
                .select("id", "name", "email")
                .where({id});
                return user[0] && User.toUserModel(user[0])
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
            await new RecipeDatabase().delRecipeByUserId(id);
            await new FollowDatabase().delFollowUserId(id);
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

    public async createUser (user: User) {
        try {
            await BaseDatabase.connection(userTableName)
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            }); 
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await BaseDatabase.connection(userTableName)
                .select("id", "name", "email", "role");
                return users.map((user => User.toUserModel(user)))
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
    public async putPasswordById (id: string, password: string) {
        try {
            await BaseDatabase.connection(userTableName)
                .update(
                    password
                )
                .where(id);
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
