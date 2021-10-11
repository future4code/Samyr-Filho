import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       
    }
    getCPF = (): string => this.cpf;
    getName = (): string => this.name;
    getAge = (): number => this.age;
    getBalance = (): number => this.balance;
    getTransaction = (): Transaction[] => this.transactions;
    addTransaction = (description: string, value: number, date: string) => {
      const newTransaction = new Transaction(description, value, date)
      this.transactions.push(newTransaction);
      this.balance += value;
   }
  
  }