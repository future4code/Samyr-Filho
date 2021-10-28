import { User } from "../../Model/User";
import { Authenticator } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";
import { UserMethods } from "./iUserBusiness";

export class UserBusiness {
    private idGenerator: IdGenerator
    private authenticator: Authenticator
    private hashManager: HashManager
    private userData: UserMethods
    constructor(
        userDataImplement: UserMethods
    ) {
        this.idGenerator = new IdGenerator()
        this.authenticator = new Authenticator()
        this.hashManager = new HashManager()
        this.userData = userDataImplement
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
        
        const user = await this.userData.findByEmail(email);
        if(user){
            throw 'Email já cadastrado'
        }
        const id: string = new IdGenerator().generateId()
        const cipherPassword = new HashManager().generateHash(password);
        const newwUser: User = new User(id, name, email, cipherPassword)
        await this.userData.create(newwUser);
        const token = new Authenticator().generateToken({ id })
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
        
        const user = await this.userData.findByEmail(email);
        if(!user){
            throw 'Email e senha não conferem'
        }
        
        const passwordIsCorrect = new HashManager().compareHash(password, user.getPassword())

        if(!passwordIsCorrect){
            throw 'Email ou senha não conferem!'
        }
        const token = new Authenticator().generateToken({ id: user.getId() })
        return token
    }
}