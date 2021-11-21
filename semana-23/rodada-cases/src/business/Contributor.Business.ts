import { ContributorData } from "../data/contributor/Contributor.Data";
import BaseError from "../error/BaseError";
import { ContributorModel, InputContributorDTO } from "../model/Contributor.Model";
import { IdGenerator } from "../services/IdGenerator";

export class ContributorBusiness  {
    constructor(
        private idGenarator : IdGenerator,
        private contributorData : ContributorData
    ){

    }

    async createContributor(input: InputContributorDTO){
        
        if(!input.firstName || !input.lastName){
            throw new BaseError("Fields 'firstName' and 'fastName' are required!", 422)
        }
        const id = this.idGenarator.generate();
        const newContributor = new ContributorModel(
            id,
            input.firstName as string,
            input.lastName as string,
            0
        )
        await this.contributorData
                        .createContributor(newContributor);
        return {mensagem: "Contributor registered"}
    }
    async getContributorByNames(firstName: string, lastName: string){
        
        const result: ContributorModel = await this.contributorData
                        .getContributorByNames(firstName, lastName);
        return result
    }
}

export default new ContributorBusiness(
    new IdGenerator(),
    new ContributorData()
)