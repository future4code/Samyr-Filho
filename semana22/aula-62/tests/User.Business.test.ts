import { User } from "../src/Business/iUser"
import { UserBusiness } from "../src/Business/User.Business"

describe("Aula 62 Exercício 2a", ()=>{
    const user = new UserBusiness()
    test("performPurchase balance > value", async ()=>{
        const newUser: User | undefined = await user
                                                .performPurchase({
                                                                    name:'Samyr', 
                                                                    balance:500
                                                                    },
                                                                50);
        expect(newUser)
            .toEqual({name:'Samyr', balance: 450})
    })

    test("performPurchase balance = value", async ()=>{
        const newUser: User | undefined = await user
                                                .performPurchase({
                                                                    name:'Samyr', 
                                                                    balance:50
                                                                    },
                                                                50);
        expect(newUser)
            .toEqual({name:'Samyr', balance: 0})
    })

    test("performPurchase balance < value", async ()=>{
        const newUser: User | undefined = await user
                                                .performPurchase({
                                                                    name:'Samyr', 
                                                                    balance:40
                                                                    },
                                                                50);
        expect(newUser)
        .toEqual(undefined)
    })
})