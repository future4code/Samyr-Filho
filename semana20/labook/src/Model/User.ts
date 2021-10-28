// export interface friends {
//     id: string,
//     userId: string,
//     friendId: string
// }

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){}

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getPassword() {
        return this.password
    }
    static setUser(data: any): User {
        return new User(
            data.id, 
            data.name, 
            data.email, 
            data.password
            );
    }
}


