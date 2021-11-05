import app from "./app"
import { pokemonRouter } from "./Controller/Router/pokemonRouter";


app.use("/pokemon", pokemonRouter);





