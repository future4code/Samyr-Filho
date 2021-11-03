import { iMetodosUser, iMetodoUserDelete, iMetodoUserInsert, iMetodoUserUpdate } from "../iUser";

export class Metodos implements iMetodosUser {
    insert: iMetodoUserInsert;
    update: iMetodoUserUpdate;
    delete: iMetodoUserDelete;

}