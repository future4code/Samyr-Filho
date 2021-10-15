import { iProduct } from "./iProduct";


export interface iTicket {
    insertTicket(name: string, 
                 description: string, 
                 sale: number, 
                 tripOrigin: string, 
                 tripDestin: string): void;
}