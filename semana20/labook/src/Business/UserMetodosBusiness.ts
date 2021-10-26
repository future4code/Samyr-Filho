import { iUserDeleteMetodoBusiness, iUserInsertMetodoBusiness, iUserMetodosBusiness, iUserUpdateMetodoBusiness } from "./iUserBusiness";

export class UserMetodosBusiness implements iUserMetodosBusiness {
    // private userInsertMetodoBusiness : iUserInsertMetodoBusiness;
    // private userUpdateMetodoBusiness : iUserUpdateMetodoBusiness;
    // private userDeleteMetodoBusiness : iUserDeleteMetodoBusiness;
    
    insert: iUserInsertMetodoBusiness;
    Update: iUserUpdateMetodoBusiness;
    delete: iUserDeleteMetodoBusiness;
    end: iUserMetodosBusiness;
}