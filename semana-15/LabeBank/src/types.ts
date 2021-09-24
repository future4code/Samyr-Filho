export type account = {
    id: number,
    name: string,
    cpf: string,
    birthDate: Date,
    balance: number
  }

  export type statement = {
    id: number,
    idConta: number,
    date: Date,
    description: string,
    value: number
  }
  
  export enum UserType {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
  }