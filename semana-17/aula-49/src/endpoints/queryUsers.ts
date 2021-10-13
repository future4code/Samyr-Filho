import { connection } from "../data/connection"


export default async function selectUsers(name: string,
                                                type: string,
                                                sort: string,
                                                order: string,
                                                size: number,
                                                offset: number):Promise<any> {
    
        const result = await connection("aula49_exercicio")
            .where('name', 'like', `%${name}%`)
            .where('type',"=", `${type}`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset);
        return result
    
 }