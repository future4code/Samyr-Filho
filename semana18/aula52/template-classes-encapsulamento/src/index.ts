// Exercício 1
// a) O construtor, como o próprio nome diz, serve para construir uma classe.
// Ela é instanciada através da keyword new - const user = new User()

import { Bank } from "./Bank";
import { UserAccount } from "./UserAccount";

// b) 1 vez
// const Camila: UserAccount = new UserAccount("123.456.789-10", "Camila", 25)

// c) Através de getters 

// Exercício 3
const Camila: UserAccount = new UserAccount("123.456.789-10", "Camila", 25);

const banco: Bank = new Bank([Camila]);
banco
    .getAccount("123.456.789-10")
        .addTransaction("Pg.Conta", 50, "10/10/2021");

banco
    .addUserAccount("987.654.321.01", "Carla", 42);
banco
    .getAccount("987.654.321.01")
        .addTransaction("Pg.Conta Luz", 150, "10/10/2021");

banco
    .getAccount("123.456.789-10")
        .addTransaction("Pg.Conta Água", 150, "10/10/2021");

console.log(banco.getAccount("123.456.789-10").getBalance())
console.log(banco.getAccount("987.654.321.01").getBalance())

