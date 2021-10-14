import { iProduct } from "./IProduct";

export interface iTicket extends iProduct{
    setTripOrigin(value : string): void;
    setTripDestin(value: string): void;
}