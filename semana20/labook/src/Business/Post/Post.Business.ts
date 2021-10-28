import { POST_TYPE } from "../../Model/Post";

export class PostBusiness {
    private id: string
    private description: string
    private photoURL: string
    private creationDate: Date
    private type: POST_TYPE
    constructor(
        postDataImplement : PostData()
    ){}
}