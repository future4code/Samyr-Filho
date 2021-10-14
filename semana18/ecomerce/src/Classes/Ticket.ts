import { iTicket } from "../Interfaces/ITicket"


export class Ticket implements iTicket {


    constructor(
        private tripOrigin: string,
        private tripDestin: string,
        private id: number,
        private name: string,
        private description: string,
        private sale: number
    ) { 
        
    }
    setTripOrigin(value : string){

    };
    setTripDestin(value: string){

    };
    setName(value : string){
        this.name = value
    };
    setDescription(value: string){
        this.description = value
    };
    setSale(value: number){
        this.sale = value
    };
}