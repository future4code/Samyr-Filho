import { ContributorModel} from "../../model/Contributor.Model";

export default interface iContributorData {
    createContributor(input: ContributorModel): Promise<void>;
    getContributorByNames(firstName: string, lastName: string): Promise<ContributorModel | undefined>;
    
}