import { UserAccount } from "./UserAccount";

export class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    addUserAccount = (cpf: string, name: string, age: number) => {
        const newUserAccount = new UserAccount(cpf, name, age);
        this.accounts.push(newUserAccount)
    }
    getBalance = (cpf: string) => {
        const account = this.accounts.filter((accout)=>{
            return accout.getCPF() === cpf
        })
        return account[0].getBalance;
    }
    getAccount = (cpf: string): UserAccount => {
        const account = this.accounts.filter((accout)=>{
            return accout.getCPF() === cpf
        })
        return account[0]
    }
  }