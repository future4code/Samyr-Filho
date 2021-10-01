import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { accounts, users } from './data'
import { age } from '../functions/age'
import { isDate } from 'util/types'
import { type } from 'os'
import { isNumber, isString } from 'util'
import { account, user } from './types'
import { NewLineKind } from 'typescript'




const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.post("/accounts", (req: Request, res: Response) => {
  let errorCode: number = 400;
  
  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    const validAgeUser: number | string = age(birthDate);
    if(typeof validAgeUser === "string") {
      errorCode = 422;
      throw new Error(validAgeUser);
    } else {
      if(validAgeUser <= 18) {
        errorCode = 422;
        throw new Error("Age cannot be under 18 years old!");
      }
    }
    let newId: number = 1;
    if(users.length > 0) {
      const newId: number = users[length - 1].id + 1;
    }
    const newUser: user = {
      id: newId,
      name: name,
      cpf: cpf,
      birthDate: birthDate
    }
    users.push(newUser)

    if(accounts.length > 0) {
      const newId: number = accounts[length - 1].id + 1;
    }
    const newAccount: account = {
      id: newId,
      id_user: newUser.id,
      balance: 0.00
    }
    accounts.push(newAccount)

    res.status(201).send({ message: "Account created successefully" });
  } 
  catch (error: any) {
        res.status(errorCode).send({ messagem: error.message });
  }
});
app.get('/accounts/balance', (req: Request, res: Response) => {
  let errorCode: number = 400
  const { name, cpf } = req.body;
  try {
    if((name === '') || (cpf === '')) {
      errorCode = 422;
      throw new Error("Please enter your name and cpf!");
    }
    const userResult: user | undefined= users.find((user) => {
      return (user.name.toUpperCase() === name.toUpperCase()) &&
             (user.cpf === cpf)
    })
    if(!userResult){
      errorCode = 422;
      throw new Error("User not found!");
    }

    const accountResult: account | undefined= accounts.find((account) => {
      return (account.id_user === userResult.id)
    })
    if(!accountResult){
      errorCode = 422;
      throw new Error("User not found!");
    }

    res.status(200).send(`${accountResult.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
  }
  catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
});

app.put("/accounts/balance", (req: Request, res: Response) => {
  let errorCode: number = 400;
  
  try {
    const { name, cpf, value } = req.body;
    if (!name || !cpf || !value) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    const valueDig: number = Number(value)
    if(isNaN(valueDig)){
      errorCode = 422;
      throw new Error(`Please enter a valid value! ${valueDig}`);
    }
    const indexUser = users.findIndex((user) => {
      return (user.name.toUpperCase() === name.toUpperCase()) &&
             (user.cpf === cpf)
    })
    if(indexUser === -1){
      errorCode = 422;
      throw new Error(`User not found! ${name.toUpperCase()}`);
    }
    const indexAccount = accounts.findIndex((account) => {
      return (account.id_user === users[indexUser].id)
    })
    if(indexAccount === -1){
      errorCode = 422;
      throw new Error(`Account not found!`);
    }
    accounts[indexAccount].balance =+ Number(value); 
    res.send(`${accounts[indexAccount].balance}`).end()
  } 
  catch (error: any) {
        res.status(errorCode).send({ messagem: error.message });
  }
});

app.post("/statements", (req: Request, res: Response) => {
  let errorCode: number = 400;
  
  try {
    const { idUsuario, value, description, payDate } = req.body;

    if (!idUsuario || !value || !description || !payDate) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }
    
  } 
  catch (error: any) {
        res.status(errorCode).send({ messagem: error.message });
  }
});

// app.get('/users/type/:type', (req: Request, res: Response) => {
//   let errorCode: number = 400
//   const type: string = req.params.type.toUpperCase()
//   try {
//     const isType: boolean = ((type === 'ADMIN') || (type === 'NORMAL'))
//     if(!isType) {
//       errorCode = 422
//       throw new Error('Invalid value for tipo.')
//     }
//     const result = Users.filter((user) => {
//       return user.type === type
//     })
//     res.status(200).send(result)
//   }
//   catch (error: any) {
//     res.status(errorCode).send(error.message)
//   }
// })

// app.get('/users/name/:name', (req: Request, res: Response) => {
//   let errorCode: number = 400
//   const name: string = req.params.name.toUpperCase()
//   try {
//     const result: User | undefined = Users.find((user) => user.name.toUpperCase() === name)
//     if(!result) {
//       errorCode = 404;
//       throw new Error(`User ${name} not found.`)
//     }
//     res.status(200).send(result)
//   }
//   catch (error: any) {
//     res.status(errorCode).send(error.message)
//   }
// })

// app.post("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400;
//   try {
//     const { id, name, email, type, age } = req.body;

//     if (!id || !name || !email || !type || !age) {
//       errorCode = 422;
//       throw new Error("Please check the fields!");
//     }

//     const newUser: User = {
//       id,
//       name,
//       email,
//       type,
//       age,
//     };

//     Users.push(newUser);

//     res.status(201).send({ message: "User created successefully" });
//   } catch (error: any) {
//     res.status(errorCode).send({ messagem: error.message });
//   }
// });