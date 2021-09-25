import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { Users } from './data'
import { User } from './types'




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

app.get('/users', (req: Request, res: Response) => {
  let errorCode: number = 400
  try {
    res.send(Users)
  }
  catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

app.get('/users/type/:type', (req: Request, res: Response) => {
  let errorCode: number = 400
  const type: string = req.params.type.toUpperCase()
  try {
    const isType: boolean = ((type === 'ADMIN') || (type === 'NORMAL'))
    if(!isType) {
      errorCode = 422
      throw new Error('Invalid value for tipo.')
    }
    const result = Users.filter((user) => {
      return user.type === type
    })
    res.status(200).send(result)
  }
  catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/users/name/:name', (req: Request, res: Response) => {
  let errorCode: number = 400
  const name: string = req.params.name.toUpperCase()
  try {
    const result: User | undefined = Users.find((user) => user.name.toUpperCase() === name)
    if(!result) {
      errorCode = 404;
      throw new Error(`User ${name} not found.`)
    }
    res.status(200).send(result)
  }
  catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };

    Users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});