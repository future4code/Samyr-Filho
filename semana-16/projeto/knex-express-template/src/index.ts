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
    const result = await connection("Users")
      .where({
         id: id
      })
   return result
 };

 const createUser = async (name: string, nickName: string, email: string): Promise<any> => {
    await connection("Users")
    .insert({
        name,
        nickName,
        email
    });
 };

const createTask = async (title: string, description: string, 
                          limitDate: string, creatorUserId: number): Promise<any> => {
    await connection("Users")
    .insert({
        title,
        description,
        limitDate,
        creatorUserId
    });
 };

 const changeUser = async (id: number, name: string, nickName: string): Promise<any> => {
    const findUser = await getUserById(id);
    if(!findUser){
        return ''
    } else {
        await connection("Users")
        .update({
            name: name,
            nickname: nickName
        })
        .where({
            id: id
        });
        return `Update successefully`
    };
    
 };

app.get("/user/:id", async (req, res) => {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);
        if (isNaN(id)) {
            errorCode = 422; //unprocessable entity
            
        }
        const result = await getUserById(id);
        if(result.length === 0){
            errorCode = 404;
            throw new Error("id not found.");
        }
        res.send(result).end()
    }
    catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    };
});    

app.post("/user", async (req, res) => {
        let errorCode: number = 400;
        try {
            const {name, nickname, email} = req.body;
            if (!name || !nickname || !email) {
                errorCode = 422;
                throw new Error("Please check the fields!");
              }
            await createUser(name, nickname, email);
            res.status(201).send({ message: "User created successefully" });
        }
        catch (error: any) {
            res.status(errorCode).send({ message: error.message });
        }
});

app.put("/user/edit/:id", async (req, res) => {
    let errorCode: number = 400;
    try {
        const id: number = Number(req.params.id);console.log(id)
        if (isNaN(id)) {
            errorCode = 422; //unprocessable entity
            throw new Error("Invalid value for id. Please send a number.");
        }
        const {name, nickname} = req.body;
        if (!name || !nickname) {
            errorCode = 422;
            throw new Error("Please check the fields!");
        }
        const result = await changeUser(id, name, nickname);
        if(result === ''){
            errorCode = 404;
            throw new Error("Id not found!");
        }
        res.status(200).send(result).end()
    }
    catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    };
});

app.post("/task", async (req, res) => {
    let errorCode: number = 400;
    try {
        const {title, description, limitDate, creatorUserId} = req.body;
        if (!title || !description || !limitDate || creatorUserId) {
            errorCode = 422;
            throw new Error("Please check the fields!");
          }
        
        await createTask(title, description, limitDate, creatorUserId);
        res.status(201).send({ message: "User created successefully" });
    }
    catch (error: any) {
        res.status(errorCode).send({ message: error.message });
    }
});