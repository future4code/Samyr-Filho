// import express from "express";
// import {AddressInfo} from "net";
// import { contributorRouter } from "./router/contributorRouter";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/contributors", contributorRouter);

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//         const address = server.address() as AddressInfo;
//         console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     }
// });
import { config } from "dotenv"
import app from "./app"
import ContributorController from "./controller/Contributor.Controller"

config()

const contributorController = new ContributorController();
app.post("/contributors", contributorController.createContributor)