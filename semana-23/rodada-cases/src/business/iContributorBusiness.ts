import { ContributorModel, ShowContributorDTO } from "../model/Contributor.Model";

export default interface iContributorBusiness {
    createContributor(input: ContributorModel): Promise<void>;
    getShowContributor(): Promise<ShowContributorDTO>;
}