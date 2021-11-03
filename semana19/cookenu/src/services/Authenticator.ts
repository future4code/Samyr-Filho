import dotenv from "dotenv"
import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types"

dotenv.config()


export class Authenticator {

  public generateToken = (
    payload: authenticationData
  ): string => {

    const token = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
    )

    return token
  }

  public getTokenData = (
    token: string
  ): authenticationData | null => {
    try {

      const tokenData = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as jwt.JwtPayload

      return {
        id: tokenData.id
      }

    } catch (error) {
      console.log(error)
      return null
    }
  }
}