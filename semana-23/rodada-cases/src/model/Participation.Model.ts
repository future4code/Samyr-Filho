export class ParticipationModel {
    constructor(
        private id: string,
        private contributorId: string,
        private participation: string
    ){}
    getId(){this.id}
    getContributorId(){this.contributorId}
    getParticipation(){this.participation}
    static toParticipationModel(participation: any): ParticipationModel{
        return new ParticipationModel(
            participation.id,
            participation.contributorId,
            participation.participation
            )
    }

}

export interface InputParticipationDTO {
    firstName: string | undefined,
    lastName: string | undefined,
    participation: string | undefined
}
export interface ShowParticipationsDTO {
    firstName: string,
    lastName: string,
    participations: number
}