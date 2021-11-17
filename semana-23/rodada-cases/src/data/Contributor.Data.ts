import iContributorBusiness from "../business/iContributorBusiness";
import BaseError from "../error/BaseError";
import { ContributorModel, ShowContributorDTO } from "../model/Contributor.Model";
import { BaseDatabase } from "./BaseDatabase";

export class ContributorData extends BaseDatabase implements iContributorBusiness {
    constructor(){
        super("caseCubo_contributor")
    }
    async createContributor(input: ContributorModel): Promise<void>{
        try {
            const result = await this.Connection()
                .insert({
                    id: input.getId(),
                    firstName: input.gerFirstName(),
                    lastName: input.getLastName(),
                    participation: input.getPArticipation()
                })
                .into(this.tableName)
        } catch (error) {
            throw new BaseError("Error creating record", 500)
        }
    }
    async getShowContributor(): Promise<ShowContributorDTO>{
        
        return {
            firstName:"1",
            lastName: "1",
            participation: 1
        }
    }
}