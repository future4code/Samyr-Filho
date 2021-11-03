import { Employees } from "./Employees";

export class Sellers extends Employees {
    totalSales: number

    constructor(
        totalSales: number,
        baseSalary: number,
        id: string,
        email: string, 
        name: string,
        password: string

    ) {
        super(baseSalary,id, email, name, password)
        this.totalSales = totalSales
    }
}