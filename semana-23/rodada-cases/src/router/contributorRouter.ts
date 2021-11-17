import express from "express";
import { ContributorController } from "../controller/Contributor.Controller";
export const contributorRouter = express.Router();
const contributorController = new ContributorController()

contributorRouter.get("/", contributorController.getData)