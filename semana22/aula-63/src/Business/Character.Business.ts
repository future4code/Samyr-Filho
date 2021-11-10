import { iCharacterBusiness } from "./iCharacter.Business";
import { validateCharacterBusiness } from "./validateCharacter.Business";

export class CharacterBusiness {
    constructor(){}
    performAttack = (attacker: iCharacterBusiness, defender: iCharacterBusiness ) => {
        if(!validateCharacterBusiness(attacker) || !validateCharacterBusiness(defender)){
            return "Invalid Character"
        }
        if(defender.defense <= attacker.strength){
            defender.life -= (attacker.strength - defender.defense)
        }
        // Esta implementação para ser validada dependente da função validateCharacterBusiness 
        // ser implementada
    }
    performAttackIversion = (attacker: iCharacterBusiness, 
                             defender: iCharacterBusiness, 
                             validate: (input: iCharacterBusiness)=>boolean
                             ) => {
        if(!validate(attacker) || !validate(defender)){
            return "Invalid Character"
        }
        if(defender.defense <= attacker.strength){
            defender.life -= (attacker.strength - defender.defense)
        }
        // Esta implementação não depende da implementação da função validateCharacterBusiness
        // bastando que seja passada como parametrô
    }
}