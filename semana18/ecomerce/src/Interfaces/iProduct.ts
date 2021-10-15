export interface iProduct {
    insert(name: string, description: string, sale: number): void;
    list(): any;
}