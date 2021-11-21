import BaseError from "../../error/BaseError";
import { ParticipationModel, ShowParticipationsDTO } from "../../model/Participation.Model";
import { BaseDatabase } from "../BaseDatabase";
import iParticipationData from "./iParticipation.Data";

export class ParticipationData extends BaseDatabase implements iParticipationData {
    constructor(){
        super("caseCubo_participations")
    }

    async registerParticipation(input: ParticipationModel): Promise<void>{
        try {
            
            
            await this.Connection()
            .insert(input)
            .into(this.tableName);
            
        } catch (error) {
            throw new BaseError("Error creating record!", 500)
        }
    }

    async getShowParticipations(): Promise<ShowParticipationsDTO[]>{
        try {
            
            const queryResult = await this.Connection()
            .raw(`
                SELECT ctb.firstName, ctb.lastName, COUNT(pt.Id) participations 
                FROM caseCubo_contributor ctb 
                RIGHT JOIN caseCubo_participations pt ON ctb.id = pt.contributorId
                GROUP BY ctb.id;
            `);
            
            
            const result = queryResult[0].map((contributor: ShowParticipationsDTO)=>{
                return {firstName: contributor.firstName,
                        lastName: contributor.lastName,
                        participations: contributor.participations
                }
            })
            return result as ShowParticipationsDTO[];
            
        } catch (error) {
            throw new BaseError("Error geting records!", 500)
        }
    }
}