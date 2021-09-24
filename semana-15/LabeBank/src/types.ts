export type account = {
    id: number,
    id_user: number,
    balance: number
  }

  export type statement = {
    id: number,
    idConta: number,
    date: Date,
    description: string,
    value: number
  }

  export type user = {
    id: number,
    name: string,
    cpf: string,
    birthDate: Date,
  }
  
  export enum UserType {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
  }