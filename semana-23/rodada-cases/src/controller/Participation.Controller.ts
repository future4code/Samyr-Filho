import { Request, Response } from "express";
import { ParticipationBusiness } from "../business/Participation.Business";
import { ContributorData } from "../data/contributor/Contributor.Data";
import { ParticipationData } from "../data/participation/Participation.Data";
import { IdGenerator } from "../services/IdGenerator";

export default class ParticipationController{
    private participation: ParticipationBusiness;
    constructor(){
        this.participation = new ParticipationBusiness(
            new IdGenerator(),
            new ContributorData(),
            new ParticipationData()
        )
    }
    registerParticipation = async (req: Request, res: Response) => {
        try {
            const {firstName, lastName, participation} = req.body;
            
            const result = await this.participation.registerParticipation({
                firstName,
                lastName,
                participation
            })
            res.status(201).send(result)
        } catch (error) {
            console.log(error);
            res.status(error.Code).send({ message: error.message })
        }
    }
    getParticipations = async (req: Request, res: Response) => {
        try {
            const result = await this.participation.getParticipations();
            
            res.status(200).send(result)
        } catch (error) {
            console.log(error);
            res.status(error.Code).send({ message: error.message })
        }
    }
}