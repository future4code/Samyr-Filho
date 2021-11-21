import { Request, Response } from "express";
import { ContributorBusiness } from "../business/Contributor.Business";
import { ContributorData } from "../data/contributor/Contributor.Data";
import { IdGenerator } from "../services/IdGenerator";

export default class ContributorController {
    private contributorBusiness: ContributorBusiness;
    constructor(){
        this.contributorBusiness = new ContributorBusiness(
            new IdGenerator(),
            new ContributorData()
        )
    }

    public createContributor = async (req: Request, res: Response) => {
        try {
            const {firstName, lastName} = req.body;
            
            const result = await this.contributorBusiness.createContributor({
                                        firstName,
                                        lastName});
            
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
            res.status(error.Code).send({ message: error.message })
        }
    }
    public getContributorByNames = async (req: Request, res: Response) => {
        try {
            const {firstName, lastName} = req.body;
            const result = await this.contributorBusiness.getContributorByNames(firstName, lastName);
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
            res.status(error.Code).send({ message: error.message })
        }
    }
}