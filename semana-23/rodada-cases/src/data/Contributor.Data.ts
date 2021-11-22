import iContributorBusiness from "../business/iContributorBusiness";
import BaseError from "../error/BaseError";
import { ContributorModel, ShowContributorDTO } from "../model/Contributor.Model";
import { BaseDatabase } from "./BaseDatabase";

export class ContributorData extends BaseDatabase implements iContributorBusiness {
    constructor(){
        super("caseCubo_contributor")
    }
    async createContributor(input: ContributorModel): Promise<ShowContributorDTO[]>{
        try {
            // await this.Connection()
            // .insert(input)
            // .into(this.tableName);

            const queryResult = await this.Connection()
            .raw(`
                 SELECT ctb1.firstName, ctb1.lastName, 
                 TRUNCATE((ctb1.participation * 100 / ctb2.Total), 0) participation
                 FROM ${this.tableName} ctb1,
                 (SELECT SUM(participation) as Total FROM ${this.tableName}) ctb2
                 ORDER BY participation;
            `);
            const result = queryResult[0].map((contributor: ShowContributorDTO)=>{
                return {firstName: contributor.firstName,
                        lastName: contributor.lastName,
                        participation: contributor.participation
                }
            })
            return result as ShowContributorDTO[];
            
        } catch (error) {
            throw new BaseError("Error creating record!", 500)
        }
    }
    
}