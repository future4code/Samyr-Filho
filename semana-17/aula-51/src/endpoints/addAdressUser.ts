import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import { addressInfo, addressUser } from "../types";

export const addAddressUser = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('id e cep vieram', req.params.id, req.query.cep)
        console.log('numero e comp vieram', req.query.numero, req.query.complemento)
        const cep = Number(req.query.cep);
        const numero = req.query.numero as string;
        const complemento = req.query.complemento as string;
        const id_usuario = req.params.id as string;

         if ((!id_usuario) || (isNaN(cep))) {
            res.statusCode = 422
            throw "'id_usuario' e 'cep' são obrigatórios"
         }
         const address: addressInfo | null = await getAddressInfo(cep);
         if (!address) {
            res.statusCode = 404
            throw "'cep' não encontrado"
         }
         const logradouro: string = address.logradouro;
         const bairro: string = address.bairro;
         const cidade: string = address.cidade;
         const estado: string = address.estado;
         const newAddressUser: addressUser = {
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado
         }
         await connection('AddressUser').insert(newAddressUser)

      res.status(201).send("Endereço adicionado!")
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