import { connection } from "../connection";
import { user } from "../../types"

const userTable = "Aula55_User";
export const createUser = async (
    user : user
) => {
    await connection
    .insert(
        user
      )
    .into(userTable)
}

export const getUserByEmail = async (email: string) => {
    
    const [result] = await connection(userTable)
        .where({email})
    return result
}

export const getUserById = async (id: string) => {
    
    const [result] = await connection(userTable)
        .where({id})
    return result
}

export const delUser = async (id: string) => {
    await connection(userTable)
        .delete()
        .where("id", id)
}