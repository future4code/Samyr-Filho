import { ContributorBusiness } from "../src/business/Contributor.Business";
import { ContributorData } from "../src/data/Contributor.Data";
import { ContributorModel } from "../src/model/Contributor.Model";
import { ContributorDatabaseMock } from "./ContributorDatabaseMock";
import { IdGeneratorMock } from "./services/idGeneratorMock";

const contributorBusinessMock = new ContributorBusiness(
    new IdGeneratorMock(),
    new ContributorDatabaseMock() as ContributorData
)

describe("Testing Create Contributor", ()=>{
    test("Invalid firstName field!", async ()=>{
        expect.assertions(2)
        try{
            await contributorBusinessMock.createContributor({
                firstName: undefined,
                lastName: "Moura",
                participation: 30})
    
        } catch (error) {           
            expect(error.message).toEqual("Fields 'FirstName', 'LastName' and 'participation' are required!");
            expect(error.code).toBe(422);
        }
    })
    test("Success when creating", async ()=>{
        expect.assertions(1)
        try{
            const showContributor = await contributorBusinessMock.createContributor({
                firstName: "Fernanda",
                lastName: "Moura",
                participation: 30})
        expect(showContributor).toEqual(ContributorModel)
        } catch (error) {           
            
        }
    })
})