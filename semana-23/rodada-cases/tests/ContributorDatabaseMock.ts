import { ContributorModel } from "../src/model/Contributor.Model";
import iContributorBusiness from "../src/data/contributor/iContributor.Data";

export class ContributorDatabaseMock implements iContributorBusiness {
    public async createContributor(input: ContributorModel): Promise<void>{
        
    }
    public async getContributorByNames(firstName: string, lastName: string): Promise<ContributorModel>{
        const newContributor : ContributorModel= new ContributorModel(
            "id1",
            "First1",
            "Last1",
            0
        );
        return newContributor
    }
}