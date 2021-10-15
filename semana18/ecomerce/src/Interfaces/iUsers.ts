export interface iUsers {
    insert(name: string, email: string, age: number): void;
    list(): any;
}