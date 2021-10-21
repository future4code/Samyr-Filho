import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/recipes/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
export async function insertRecipe(req: Request, res: Response): Promise<void> {
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
        const id: string = new IdGenerator().generateId()
        const newRecipe = new Recipe(id, tokenData.id, title, description, new Date());
        await new RecipeDatabase().createRecipe(newRecipe);
        res.status(200).send("Receita criada!")
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