import { UserData } from "../Data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export class UserBusiness {
    constructor(
        
    ) {

    }
    async signup(input: any) {
        
        const { name, email, password, role } = input

        if (!name || !email || !password || !role) {
            
            throw "Preencha os campos 'name', 'email', 'password' e 'role'"
        }

        if (!email.includes("@")) {
            
            throw "'email' inválido"
        }

        if (password.length < 6){
            
            throw "A senha tem que ter no mínimo 6 caracteres"
        }
        const userData = new UserData;
        const user = await userData.findUserByEmail(email);
        if(user){
            throw 'Email já cadastrado'
        }
        const id: string = new IdGenerator().generateId()
        const cipherPassword = new HashManager().generateHash(password);
        const newwUser: user = {id, 
                                name, 
                                email, 
                                password: cipherPassword, 
                                role};
        await userData.createUser(newwUser);
        const token = new Authenticator().generateToken({ id, role })
        return token
    }

    async login(input: any) {
        const { email, password } = input

        if (!email || !password) {
            throw "Preencha os campos 'email' e 'password'"
        }
        
        if (!email.includes("@")) {
            throw "'email' inválido"
        }

        if (password.length < 6){
            throw "A senha tem que ter no mínimo 6 caracteres"
        }
        const userDatabase = new UserData();
        const user = await userDatabase.findUserByEmail(email);
        if(!user){
            throw 'Email e senha não conferem'
        }
        
        const passwordIsCorrect = new HashManager().compareHash(password, user.password);

        if(!passwordIsCorrect){
            throw 'Email ou senha não conferem!'
        }
        const token = new Authenticator().generateToken({ id: user.id, role: user.role })
        return token
    }
    
    async getUsers(input: string) {
        
        const token = input;
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho"
        }
        const userDatabase = new UserData();
        const users = await userDatabase.getAllUsers();
        
        return users
       
    }

    async delete(token: string, id: string) {
       
        const tokenData = new Authenticator().getTokenData(token);
        if(!tokenData){
            throw "Token inválido, expirado ou ausente da chave 'Authorization' do cabeçalho!"
        }
        if(!id){
            throw "Preencha o parametro 'id'!"
        }
        if(tokenData.role !== "ADMIN"){
            throw "Você não é administrador. Operação não efetuada!"
        }
        await new UserData().delUserByID(id)
        
    }
}