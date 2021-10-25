
import { Recipe } from "../model/recipes/Recipe";
import { recipeTableName } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    

    public async createRecipe (recipe: Recipe) {

        try {
            
            await BaseDatabase.connection(recipeTableName)
            .insert({
                id: recipe.getId(),
                userId: recipe.getUserId(),
                title: recipe.getTitle(),
                descript: recipe.getDescript(),
                dateCriation: recipe.getDateCriation()
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
    public async findRecipeById (id: string) {
        try {
            const recipe = await BaseDatabase.connection(recipeTableName)
                .select('id', 'userId', 'title', 'descript', 'dateCriation')
                .where({id});
            return recipe[0] && Recipe.toRecipeModel(recipe[0])
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
    public async findRecipeByFeed (id: string) {
        try {
            const recipe = await BaseDatabase.connection.raw(`
            SELECT RC.id, RC.title, RC.descript, RC.dateCriation, RC.userId, U.name 
            FROM cookenu_Recipe RC
            JOIN cookenu_Follow FL ON FL.userToFollowId = RC.userId
            JOIN cookenu_Users U ON U.id = RC.userID
            WHERE FL.userId = "${id}"
            `);

            return recipe[0]
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
    public async putRecipeById (id: string, title: string, descript: string) {
        try {
            await BaseDatabase.connection(recipeTableName)
                .update({
                    'title': title,
                    'descript': descript
                })
                .where({'id': id});
        }
        catch(error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
    public async delRecipeById(id: string){
        try {
            await BaseDatabase.connection(recipeTableName)
                .delete()
                .where("id", id)
                
        } catch (error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
    public async delRecipeByUserId(userId: string){
        try {
            await BaseDatabase.connection(recipeTableName)
                .delete()
                .where("UserId", userId)
                
        } catch (error: any) {
            if (typeof(error) === "string") {
                throw error
            } else {
                throw error.sqlMessage || error.message;
            }
        }
    }
}