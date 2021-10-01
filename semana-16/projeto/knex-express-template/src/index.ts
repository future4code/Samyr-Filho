import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";


const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => { res.send("Hello from Express!") })

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

const getUserById = async (id:number): Promise<any> => {
    const result = await connection.raw(`
    SELECT id, nickname FROM Users WHERE id = "${id}"
    `)
    
    return result[0][0]
 }

 const createUser = async (name: string, nickName: string, email: string): Promise<any> => {
    await connection("Users")
    .insert({
        name,
        nickName,
        email
    });
 }

 const changeUser = async (id: number, name: string, nickName: string): Promise<any> => {
    const result = await connection("Users")
       .update({
          name: name,
          nickname: nickName
       })
       .where({
          id: id
       });
 }


app.get("/user/:id", async (req, res) => {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);
        // let result = {};
        console.log(id)
        if (isNaN(id)) {
            errorCode = 422; //unprocessable entity
            throw new Error("Invalid value for id. Please send a number.");
        }
        const result = getUserById(id);
        res.send(result).end()
    }
    catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
    
app.post("/user", async (req, res) => {
        let errorCode: number = 400;
        try {
            const {name, nickname, email} = req.body;
            if (!name || !nickname || !email) {
                errorCode = 422;
                throw new Error("Please check the fields!");
              }
            await createUser(name, nickname, email);
            res.end()
        }
        catch (error: any) {
            res.status(errorCode).send({ message: error.message });
        }
    })    
    
});

app.put("/user/edit/:id", async (req, res) => {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);
        let result = {};
        console.log(id)
        if (isNaN(id)) {
            errorCode = 422; //unprocessable entity
            throw new Error("Invalid value for id. Please send a number.");
        }
        const {name, nickname} = req.body;
        if (!name || !nickname) {
            errorCode = 422;
            throw new Error("Please check the fields!");
        }
        result = changeUser(id, name, nickname);
        res.status(200).end(result)
    }
    catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
});