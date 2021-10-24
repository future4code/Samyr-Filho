import { compareSync, genSaltSync, hashSync } from "bcryptjs"
import { config } from "dotenv"

config()

export class HashManager {
    generateHash = (plainText: string): string => {
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = genSaltSync(cost)
        const cipherText: string = hashSync(plainText, salt)
        return cipherText
    }

    compareHash = (
        plainText: string,
        cipherText: string
    ): boolean => {
        const result: boolean = compareSync(plainText, cipherText)
        return result
    }
}