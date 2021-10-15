import { getUser, insertUser } from "../data/Users"
import { idGenaration } from "../function/idGeneration"
import { iUsers } from "../Interfaces/iUsers"


export class Users implements iUsers {
    
    constructor(
        // private id: number,
        // private email: string,
        // private name: string,
        // private age: number
    ) { 
        
    }

    insert(name: string, email: string, age: number){
        const id = idGenaration()
        return insertUser(id, name, email, age)
    };

    list(){
        return getUser()
    }
    // setName (value: string) {
    //     this.name = value
    // }
    // setEmail(value: string) {
    //     this.email = value
    // }
    // setAge(value: number) {
    //     this.age = value
    // }

    // public getId(): number {
	// 	return this.id
	// }

	// public getEmail(): string {
	// 	return this.email
	// }

	// public getName(): string {
	// 	return this.name
	// }
    // public introduceYourself = () => `Olá, sou ${this.getName()}. Bom dia!`;
}