import { iUsers } from "../Interfaces/IUsers"

export class Users implements iUsers {
    
    constructor(
        private id: number,
        private email: string,
        private name: string,
        private age: number
    ) { 
        
    }

    setName (value: string) {
        this.name = value
    }
    setEmail(value: string) {
        this.email = value
    }
    setAge(value: number) {
        this.age = value
    }

    public getId(): number {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
    public introduceYourself = () => `Olá, sou ${this.getName()}. Bom dia!`;
}