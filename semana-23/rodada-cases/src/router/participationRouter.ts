import express from "express";
import ParticipationController from "../controller/Participation.Controller";
export const participationRouter = express.Router();
const participationController = new ParticipationController()

participationRouter.post("/", participationController.registerParticipation)
participationRouter.get("/", participationController.getParticipations)