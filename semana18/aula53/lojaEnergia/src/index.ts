import { Client } from "./Classes/Client";
import { Place } from "./Classes/Place";

const Cliente = new Client("Samyr", 123, 450) 
console.log(Client.name);
console.log(Client.registrationNumber)
console.log(Client.consumedEnergy)
console.log(Client.calculateBill())