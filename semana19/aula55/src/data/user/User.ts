import { connection } from "../connection";
import { user } from "../../types"

const userTable = "Aula55_User";
export const createUser = async (
    user : user
) => {
    await connection
    .insert({
        user
      })
    .into(userTable)
}