import { config } from "dotenv"
import app from "./app"
import { createProduct } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser"
import { getProducts } from "./endpoints/getProducts";
import { getUsers } from "./endpoints/getUsers";

config()
app.post('/users', createUser);
app.post('/products', createProduct);
app.get('/users', getUsers)
app.get('/products', getProducts)
