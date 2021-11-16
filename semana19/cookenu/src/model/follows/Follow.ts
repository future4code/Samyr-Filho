export class Follow {

    constructor(
        private id: string,
        private userId: string,
        private userToFollowId: string,
        private dateFollowInit: Date,
        private follow: boolean
    )
    {}

    getId(){
        return this.id
    }
    getUserId(){
        return this.userId
    }
    getUserToFollowId(){
        return this.userToFollowId
    }
    getDateFollowInit(){
        return this.dateFollowInit
    }
    getFollow(){
        return this.follow
    }
    static toFollowModel(data: any): Follow{
        return new Follow(
            data.id,
            data.userId,
            data.userToFollowId,
            data.dateFollowInit,
            data.follow
        ) 
    }
}