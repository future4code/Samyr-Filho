import { Request, Response } from "express";
import selectUsers from "./queryUsers";
import { userType } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name as string;
      let type = req.params.type as string;
      let sort = req.query.sort as string;
      let order= req.query.order as string;
      let page = Number(req.query.page);

      if(page <1 || isNaN(page)){
         page = 1;
      }
      const size = 5;
      const offset = size * (page-1);

      if(!name){
         name=""
      }
      if(!type){
         type = ""
      }
      if((!sort) || (sort !== "name" && sort !== "type")){
         sort = "name";
      }
      if((!order) || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")){
         order = "ASC";
      }
      const result = await selectUsers(name, type, sort, order, size, offset)

      const users = result.map(toUser);

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

const toUser = (input: any): userType => {
   return input && {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}