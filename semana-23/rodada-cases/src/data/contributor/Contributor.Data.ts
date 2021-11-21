import iContributorData from "./iContributor.Data";
import BaseError from "../../error/BaseError";
import { ContributorModel, ShowContributorDTO } from "../../model/Contributor.Model";
import { BaseDatabase } from "../BaseDatabase";

export class ContributorData extends BaseDatabase implements iContributorData {
    constructor(){
        super("caseCubo_contributor")
    }
    async createContributor(input: ContributorModel): Promise<void>{
        try {
            await this.Connection()
            .insert(input)
            .into(this.tableName);
            
        } catch (error) {
            throw new BaseError("Error creating record!", 500)
        }
    }

    async getContributorByNames(firstName: string, lastName: string): Promise<ContributorModel | undefined>{
        try {
            
            const queryResult = await this.Connection()
                .raw(`
                    SELECT * FROM caseCubo_contributor
                    WHERE UPPER(firstName) = '${firstName.toUpperCase()}' AND
                          UPPER(lastName) = '${lastName.toUpperCase()}';
                `)
            
            let result : ContributorModel | undefined
            
            if(queryResult[0].length > 0){
                result = new ContributorModel(queryResult[0][0].id,
                    queryResult[0][0].firstName,
                    queryResult[0][0].lastName,
                    0);
            } else {
                result = undefined
            }
            console.log('passei aki 3', queryResult[0].length, result);
            return result;
            
        } catch (error) {
            throw new BaseError("Error geting records!", 500)
        }
    }

}