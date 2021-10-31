import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import { authenticationData } from "../Business/User/iUser.Business";

dotenv.config()

const { JWT_KEY, ACCESS_TOKEN_EXPIRES_IN} = process.env

export class Authenticator {

  public generateToken = (
    payload: authenticationData
  ): string => {

    const token = jwt.sign(
      payload,
      JWT_KEY! as string,
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN! }
    )

    return token
  }

  public getTokenData = (
    token: string
  ): authenticationData | null => {
    try {

      const tokenData = jwt.verify(
        token,
        JWT_KEY! as string
      ) as authenticationData // jwt.JwtPayload

      return {
        id: tokenData.id
      }

    } catch (error) {
      console.log(error)
      return null
    }
  }
}