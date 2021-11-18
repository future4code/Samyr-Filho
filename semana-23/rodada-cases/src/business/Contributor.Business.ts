import { ContributorData } from "../data/Contributor.Data";
import BaseError from "../error/BaseError";
import { ContributorModel, InputContributorDTO } from "../model/Contributor.Model";
import { IdGenerator } from "../services/IdGenerator";

export class ContributorBusiness  {
    constructor(
        private idGenarator : IdGenerator,
        private contributorData : ContributorData
    ){

    }

    async createContributor(
                            input: InputContributorDTO){
        
        if(!input.firstName || !input.lastName || !input.participation){
            throw new BaseError("Fields 'FirstName', 'LastName' and 'participation' are required!", 422)
        }
        const id = this.idGenarator.generate();
        const newContributor = new ContributorModel(
            id,
            input.firstName as string,
            input.lastName as string,
            input.participation as number
        )
        const result = await this.contributorData
                        .createContributor(newContributor);
        
                        
        return result
    }
    
}

export default new ContributorBusiness(
    new IdGenerator(),
    new ContributorData()
)