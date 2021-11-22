import { ParticipationModel, ShowParticipationsDTO } from "../../model/Participation.Model";

export default interface iParticipationData {
    registerParticipation(input: ParticipationModel): Promise<void>;
    getShowParticipations(): Promise<ShowParticipationsDTO[]>
}