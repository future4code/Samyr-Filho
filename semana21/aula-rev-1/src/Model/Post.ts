export enum POST_TYPE {
    EVENTO = "EVENTO",
    NORMAL = "NORMAL"
}

export class Post {
    constructor(
        private id: string,
        private userId: string,
        private description: string,
        private photoURL: string,
        private creationDate: Date,
        private type: POST_TYPE
    ){}
    getId() : string {
        return this.id
    }
    getUserId() : string {
        return this.userId
    }
    getDescription() : string {
        return this.description
    }
    getPhotoURL() : string {
        return this.photoURL
    }
    getCreationDate() : Date {
        return this.creationDate
    }
    getType() : POST_TYPE {
        return this.type
    }
    static setPost(data: any): Post {
        return new Post(
            data.id, 
            data.userId,
            data.description, 
            data.photoURL, 
            data.creationDate,
            data.type
            );
    }
}
