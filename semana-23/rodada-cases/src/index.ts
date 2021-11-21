import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { participationRouter } from "./router/participationRouter";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/participation", participationRouter);

const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
  });