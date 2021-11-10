import { CharacterBusiness } from "../src/Business/Character.Business"
import { iCharacterBusiness } from "../src/Business/iCharacter.Business"
import { validateCharacterBusiness } from "../src/Business/validateCharacter.Business"
import { validateMockfail, validateMockSuccess } from "../src/mocks/validateCharacter.Business.mock"

describe("Aula 63 Exercício 2", ()=>{
    test("Character with name empty (a)", async ()=>{
        const newCharacter: iCharacterBusiness = {
            name: "",
            defense: 1000,
            life: 1000,
            strength: 800
        }
        expect(validateCharacterBusiness(newCharacter))
            .toEqual(false)
    })

    test("Character with life equal 0 (b)", async ()=>{
        const newCharacter: iCharacterBusiness = {
            name: "Samyr",
            defense: 1000,
            life: 0,
            strength: 800
        }
        expect(validateCharacterBusiness(newCharacter))
            .toEqual(false)
    })

    test("Character with strength equal 0 (c)", async ()=>{
        const newCharacter: iCharacterBusiness = {
            name: "Samyr",
            defense: 1000,
            life: 1000,
            strength: 0
        }
        expect(validateCharacterBusiness(newCharacter))
            .toEqual(false)
    })

    test("Character with defense equal 0 (d)", async ()=>{
        const newCharacter: iCharacterBusiness = {
            name: "Samyr",
            defense: 0,
            life: 1000,
            strength: 800
        }
        expect(validateCharacterBusiness(newCharacter))
            .toEqual(false)
    })

    test("Character with life, strength and defense negative (e)", async ()=>{
        const newCharacter: iCharacterBusiness = {
            name: "Samyr",
            defense: -1000,
            life: -1000,
            strength: -800
        }
        expect(validateCharacterBusiness(newCharacter))
            .toEqual(false)
    })

    test("Character data ok (f)", async ()=>{
        const newCharacter: iCharacterBusiness = {
            name: "Samyr",
            defense: 1000,
            life: 1000,
            strength: 800
        }
        expect(validateCharacterBusiness(newCharacter))
            .toEqual(true)
    })
})
describe("Aula 63 Exercício 5", ()=>{
    test("letra A", ()=>{
        const character = new CharacterBusiness()
        try {
            const newCharecterAttack: iCharacterBusiness = {
                name: "Samyr",
                defense: 1000,
                life: 1000,
                strength: 1000
            }
            const newCharecterDefender: iCharacterBusiness = {
                name: "Mat",
                defense: 800,
                life: 1000,
                strength: 800
            }
            expect(character.performAttackIversion(
                newCharecterAttack,
                newCharecterDefender,
                validateMockSuccess
            )).not.toBe("Invalid Character")
            expect(newCharecterAttack.life).toEqual(1000);
            expect(newCharecterDefender.life).toEqual(800)
            expect(validateMockSuccess).toHaveBeenCalled()
            expect(validateMockSuccess).toHaveBeenCalledTimes(2)
            expect(validateMockSuccess).toHaveReturnedTimes(2)
        } catch (error) {
            expect.assertions(6)
        }
    })

    test("letra B", ()=>{
        const character = new CharacterBusiness()
        try {
            const newCharecterAttack: iCharacterBusiness = {
                name: "Samyr",
                defense: 1000,
                life: 1000,
                strength: 1000
            }
            const newCharecterDefender: iCharacterBusiness = {
                name: "",
                defense: 800,
                life: 1000,
                strength: 800
            }
            character.performAttackIversion(
                newCharecterAttack,
                newCharecterDefender,
                validateMockfail
            )
            
            expect(validateMockfail).toHaveBeenCalled()
            expect(validateMockfail).toHaveBeenCalledTimes(1)
            expect(validateMockfail).toHaveReturnedWith(false)
            expect(validateMockfail).toHaveReturnedTimes(1)
        } catch (error) {
            expect(error).toEqual("Invalid Character")
            
        } finally{
            expect.assertions(4)
        }
    })
})