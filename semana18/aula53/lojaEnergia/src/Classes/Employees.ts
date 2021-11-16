import { Users } from "./Users";

export class Employees extends Users {
    
    baseSalary: number

    constructor(
        baseSalary: number,
        id: string,
        email: string, 
        name: string,
        password: string
    ) {
        super(id, email, name, password )
        this.baseSalary = baseSalary
    }
}