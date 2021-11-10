import { iCharacterBusiness } from "./iCharacter.Business";

export const validateCharacterBusiness = (input: iCharacterBusiness): boolean => {
    if(!input.defense || !input.life || !input.name || !input.strength){
        return false
    }
    if(input.defense <= 0 || input.life <=0 || input.strength <= 0){
        return false
    }
    return true
}