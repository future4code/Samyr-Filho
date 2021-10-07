import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import { addressInfo, addressUser } from "../types";

export const addAddressUser = async (req: Request, res: Response): Promise<void> => {
   try {
      const cep = Number(req.body.cep);
      const numero = req.body.numero as string;
      const complemento = req.body.complemento as string;
      const usuario_id = Number(req.params.id);

      if (isNaN(usuario_id) || isNaN(cep)) {
         res.statusCode = 422
         throw "'usuario_id' e 'cep' são inteiros e obrigatórios"
      }
      const address: addressInfo | null = await getAddressInfo(cep);
      if (!address) {
         res.statusCode = 404
         throw "'cep' não encontrado"
      };
      const logradouro: string = address.logradouro;
      const bairro: string = address.bairro;
      const cidade: string = address.cidade;
      const estado: string = address.estado;
      const newAddressUser: addressUser = {
         usuario_id,
         cep,
         logradouro,
         numero,
         complemento,
         bairro,
         cidade,
         estado
      };
      await connection('AddressUser').insert(newAddressUser);

      res.status(201).send("Endereço adicionado!");
   }
   catch (error: any) {
      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}