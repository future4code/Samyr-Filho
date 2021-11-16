import { Router } from "express";
import { PokemonController } from "../Pokemon.Controller";

export const pokemonRouter = Router();

const pokemonController = new PokemonController();
pokemonRouter.get("/:rowId", pokemonController.findByRowId)
pokemonRouter.get('/', pokemonController.findByFilter)