export class CommentsPost {
    constructor(
        private id: string,
        private userId: string,
        private postId: string,
        private comment: string,
        private like: boolean
    ){}
    getId(): string {
        return this.id
    }
    getUserId(): string {
        return this.userId
    }
    getPostId(): string {
        return this.postId
    }
    getComment(): string {
        return this.comment
    }
    getLike(): boolean {
        return this.like
    }
}