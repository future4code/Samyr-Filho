export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }

export interface UserCassino {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}