export interface iUserBusiness {
    metodos: iUserMetodosBusiness;
}
export interface iUserMetodosBusiness {
    insert: iUserInsertMetodoBusiness;
    Update: iUserUpdateMetodoBusiness;
    delete: iUserDeleteMetodoBusiness;
    end: iUserMetodosBusiness;
}
export interface iUserInsertMetodoBusiness {
    setName(value: String): iUserInsertMetodoBusiness;
    setEmail(value: String): iUserInsertMetodoBusiness;
    setSenha(value: String): iUserInsertMetodoBusiness;
    setRole(value: String): iUserInsertMetodoBusiness;
    end:iUserMetodosBusiness
}
export interface iUserUpdateMetodoBusiness {
    setId(value: String): iUserUpdateMetodoBusiness;
    setName(value: String): iUserUpdateMetodoBusiness;
    setEmail(value: String): iUserUpdateMetodoBusiness;
    setSenha(value: String): iUserUpdateMetodoBusiness;
    setRole(value: String): iUserUpdateMetodoBusiness;
    end:iUserMetodosBusiness
}
export interface iUserDeleteMetodoBusiness {
    setId(value: String): iUserDeleteMetodoBusiness;
    end:iUserMetodosBusiness
}