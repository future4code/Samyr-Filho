import { ContributorData } from "../data/contributor/Contributor.Data";
import iParticipationData from "../data/participation/iParticipation.Data";
import { ParticipationData } from "../data/participation/Participation.Data";
import BaseError from "../error/BaseError";
import { ContributorModel} from "../model/Contributor.Model";
import { InputParticipationDTO, ParticipationModel } from "../model/Participation.Model";
import { IdGenerator } from "../services/IdGenerator";

export class ParticipationBusiness {
    constructor(
        private idGenarator: IdGenerator,
        private contributorData: ContributorData,
        private participationData: iParticipationData
    ){}
    async registerParticipation(input: InputParticipationDTO){
        if(!input.firstName || !input.lastName || !input.participation){
            throw new BaseError("Fields 'firstName', 'lastName' and 'participation' are required!", 422)
        }
        let contributorId: string | unknown = ""
        
        const contributor: ContributorModel | undefined= await this.contributorData.getContributorByNames(
            input.firstName, input.lastName
        );
        if(!contributor){
            contributorId = this.idGenarator.generate();
            const newContributor = new ContributorModel(
                contributorId as string,
                input.firstName,
                input.lastName,
                0
            )
            await this.contributorData.createContributor(newContributor)
        } else {
            contributorId = contributor.getId()
        }

        const id = this.idGenarator.generate();
        const newParticipation = new ParticipationModel(
            id,
            contributorId as string,
            input.participation
        )
        await this.participationData.registerParticipation(newParticipation);
        return {mensagem: "Participation registered"}
    }
    async getParticipations(){
        const result = await this.participationData.getShowParticipations();
        
        
        return result
    }
}
export default new ParticipationBusiness(
    new IdGenerator(),
    new ContributorData,
    new ParticipationData()
)