import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/recipes/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
export async function putRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const {title, description} = req.body
        if(!title || !description){
            res.statusCode = 422
            throw "Preencha os campos 'title' e 'description'"
        }
        const id: string = req.params.id
        if(!id){
            res.statusCode = 422
            throw "Preencha o parametro 'id'"
        }
        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.findRecipeById(id);
        if(!recipe){
            res.statusCode = 409
            throw "Receita não encontrada!"
        }
        if((tokenData.id !== recipe.getUserId()) && (tokenData.role !== "ADMIN")){
            res.statusCode = 403
            throw "Você não é o proprietário desta receita e não é administrador. Operação não efetuada"
        }
        await recipeDatabase.putRecipeById(id, title, description);
        res.status(200).send("Receita atualizada!")
    }
    catch (error: any) {
        if (typeof(error) === "string") {
            res.send(error)
        } else {
            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }
    }
}