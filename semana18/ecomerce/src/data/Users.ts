import { connection } from "./connection";



export async function insertUser(id: string, 
                                         name: string, 
                                         email: string, 
                                         age: number): Promise<any> {
    await connection("EComerce_Users")
        .insert({
            id,
            name,
            email,
            age
        })
    return true
}

export async function getUser(): Promise<any> {
const result = await connection("EComerce_Users")
return result
}

