import { Request, Response } from "express";

export interface iMetodosUserController {
    signup(req: Request, res: Response): void;
    login(req: Request, res: Response): void;
    getUsers(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}
export interface iUserController {
    metodos: iMetodosUserController
}