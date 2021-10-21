
import { Recipe } from "../model/recipes/Recipe";
import { BaseDatabase } from "./BaseDatabase";
const tableName: string = "cookenu_Recipe";
export class RecipeDatabase extends BaseDatabase {
    

    public async createRecipe (recipe: Recipe) {

        try {
            
            await BaseDatabase.connection(tableName)
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
            const recipe = await BaseDatabase.connection(tableName)
                .select('id', 'title', 'descript', 'dateCriation')
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
}