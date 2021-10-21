import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
export async function getRecipe(req: Request, res: Response) {
    try {
        const token = req.headers.authorization;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            res.statusCode = 401
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const id = req.params.id;
        if(!id){
            res.statusCode = 422
            throw "Preencha o parametro 'id'"
        }
        const recipeDatabase = new RecipeDatabase();
        const recipe = await recipeDatabase.findRecipeById(id);
        const result = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescript(),
            createAt: String(recipe.getDateCriation().toLocaleString()).substr(0, 10)
        }
        res.status(200).send(result)
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