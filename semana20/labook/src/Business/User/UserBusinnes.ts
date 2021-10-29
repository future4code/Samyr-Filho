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
        
        const { name, email, password } = input

        if (!name || !email || !password) {
            throw "Fill in the fields 'name', 'email' and 'password'!"
        }

        if (!email.includes("@")) {
            throw "'invalid email!"
        }

        if (password.length < 6){
            throw "Password must be at least 6 characters"
        }
        
        const user = await this.userData.findByEmail(email);
        if(user){
            throw 'E-mail already registered'
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
            throw "Fill in the fields 'email' and 'password'!"
        }
        
        if (!email.includes("@")) {
            throw "invalid email!"
        }

        if (password.length < 6){
            throw "Password must be at least 6 characters"
        }
        
        const user = await this.userData.findByEmail(email);
        if(!user){
            throw 'Email and password do not match!'
        }
        
        const passwordIsCorrect = new HashManager().compareHash(password, user.getPassword())

        if(!passwordIsCorrect){
            throw 'Email and password do not match!'
        }
        const token = new Authenticator().generateToken({ id: user.getId() })
        return token
    }
    async makeFriend(id: string, friendId: string) {
        try {
            
            
            await this.userData.makeFriends(id, friendId);    
            console.log("Erro aqui");
        } catch (error) {
            throw "Error SQL"
        }
        
    }
    async unMakeFriend(id: string, friendId: string) {
        try {
            
            await this.userData.unMakeFriends(id, friendId);    

        } catch (error) {
            throw "Error SQL"
        }
        
    }
}