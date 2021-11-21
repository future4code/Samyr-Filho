import { contributorRouter } from "../router/contributorRouter"

export class ContributorModel {
    constructor(
      private id: string,
      private firstName: string,
      private lastName: string,
      private participation: number
    ){}
    getId() {this.id}
    getFirstName(){this.firstName}
    getLastName(){this.lastName}
    getParticipation(){this.participation}
    static toContributorModel(contributor: any): ContributorModel {
        return new ContributorModel(
            contributor.id,
            contributor.firstName,
            contributor.lastName,
            contributor.participation
        )
    }
}

export interface InputContributorDTO {
    firstName: string | undefined,
    lastName: string | undefined
}

export interface ShowContributorDTO {
    firstName: string,
    lastName: string,
    participation: number
}