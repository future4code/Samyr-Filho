import { Consumer } from "./Classes/Consumer"
import { Users } from "./Classes/Users"

// app.post('/users/signup', createUser)

// getAddressInfo(80530208098)
//     .then(console.log)
//     .catch(console.log)

// const samyr = new Users(
//     "001", "samyr@schissa.com.br", "Samyr", "1234"
// )
// console.log("id:", samyr.getId(), "email:",  samyr.getEmail(), "nome:", samyr.getName())

const samyr = new Consumer(
    "1234567890", "002", "samyr@schissa.com.br", "Samyr", "1234"
)
console.log("id:", samyr.getId(), "email:",  samyr.getEmail(), "nome:", samyr.getName())
console.log("Valor Total da Compra:", samyr.totalPurchases)
console.log("Cartão de crédito:",  samyr.getCreditCard())
console.log(samyr.introduceYourself())