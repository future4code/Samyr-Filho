import { connection } from "./connection";

export async function insertProduct(id: string, 
                                    name: string, 
                                    description: string, 
                                    sale: number,
                                    type: string,
                                    tripOrigin: string,
                                    tripDestin: string): Promise<any> {
    await connection("EComerce_Products")
        .insert({
            id,
            name,
            description,
            sale,
            type,
            tripOrigin,
            tripDestin
        })
    return true
}

export async function getProducts(): Promise<any> {
    const result = await connection("EComerce_Products")
    return result
    }