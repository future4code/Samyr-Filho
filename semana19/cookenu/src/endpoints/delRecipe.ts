import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
export async function delRecipe(req: Request, res: Response) {
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
        if((tokenData.id !== recipe.getUserId()) && (tokenData.role !== "ADMIN")){
            res.statusCode = 403
            throw "Você não é o proprietário desta receita e não é administrador. Operação não efetuada"
        }
        recipeDatabase.delRecipeById(recipe.getId())
        res.status(200).send("Exclusão efetuada!")
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