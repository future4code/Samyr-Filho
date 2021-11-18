import { ContributorModel, ShowContributorDTO } from "../src/model/Contributor.Model";
import contributorJson from "../src/data/contributor.json"

export class ContributorDatabaseMock {
    public async createContributor(input: ContributorModel): Promise<ShowContributorDTO[]>{
        const newContributors: ShowContributorDTO[] = contributorJson;
        return newContributors
    }
}