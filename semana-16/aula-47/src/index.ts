import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { isString } from "util";

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

// Exercício 1b) e 3a)
const getActorByname = async (name:string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result[0][0]
}

const getActorById = async (id:number): Promise<any> => {
   const result = await connection("Actor")
      .where({
         id: id
      })
   return result
}

app.get("/actors/:name_id", async (req, res) => {
   let errorCode: number = 400;
   try {
      let result = {}
      const id: number = Number(req.params.name_id);
      if(isNaN(id)){
         result = await getActorByname(req.params.name_id);
      } else {
         result = await getActorById(id)
      }
      res.status(200).send(result)
   }
   catch (error: any) {
      res.status(errorCode).send({ message: error.message })
   };
   
});

// Exercício 1 c)
const getActorByGender = async (gender:string): Promise<any> => {
   const result = await connection.raw(`
   SELECT COUNT(*) AS COUNT FROM Actor WHERE gender = "${gender}"
   `)
   return result[0][0]
}
app.get("/actors/gender/:gender", async (req, res) => {
   let errorCode: number = 400;
   try {
      if(!((req.params.gender.toUpperCase() === "MALE") || 
         (req.params.gender.toUpperCase() === "FEMALE"))) {
            throw new Error("'Female' or 'male' requered")
         }
      const result = await getActorByGender(req.params.gender)
      res.status(200).send(result)
   }
   catch (error: any) {
      res.status(errorCode).send({ message: error.message })
   };
   
});

// Exercício 2
// a)
const changeSalary = async (id: number, salary: number): Promise<any> => {
      const result = await connection("Actor")
         .update({
            salary: salary
         })
         .where({
            id: id
         });
   }
app.put('/actors/salary/:id', async (req, res) => {
   let errorCode: number = 400;
   try {
      const idUser: number = Number(req.params.id);
      if(isNaN(idUser)){
         errorCode = 422; //unprocessable entity
         throw new Error("Invalid value for id. Please send a number.");
      }
      changeSalary(idUser, req.body.salary)
         res.end();
   } 
   catch (error: any) {
      res.status(errorCode).send({ message: error.message })
   }
})

// b)
const deleteActorByIdy = async (id: number): Promise<any> => {
   const result = await connection("Actor")
      .delete()
      .where({
         id: id
      });
}
app.delete('/actors/:id', async (req, res) => {
let errorCode: number = 400;
try {
   const idUser: number = Number(req.params.id);
   if(isNaN(idUser)){
      errorCode = 422; //unprocessable entity
      throw new Error("Invalid value for id. Please send a number.");
   }
   deleteActorByIdy(idUser)
      res.end();
} 
catch (error: any) {
   res.status(errorCode).send({ message: error.message })
}
})

// c)
const getAVGByGender = async (gender:string): Promise<any> => {
   const averanger = await connection("Actor")
      .avg("salary")
      .where({
         gender: gender
      })
   
   return averanger
}
app.get("/actors/gender/avg/:gender", async (req, res) => {
   let errorCode: number = 400;
   try {
      if(!((req.params.gender.toUpperCase() === "MALE") || 
         (req.params.gender.toUpperCase() === "FEMALE"))) {
            throw new Error("'Female' or 'male' requered")
         }
      const result = await getAVGByGender(req.params.gender)
      res.status(200).send(result)
   }
   catch (error: any) {
      res.status(errorCode).send({ message: error.message })
   };
   
});

// Exercício 3
// b)
const countActors = async (gender: string): Promise<any> => {
   const actors = await connection("Actor")
      .count("*")
      .where({
         gender: gender
      })
   return actors
}

app.get("/actor", async (req, res) => {
   let errorCode: number = 400;
   try {
      const gender: string | any = req.query.gender;
      
      const result = await countActors(gender);
      res.status(200).send(result)
   }
   catch (error: any) {
      res.status(errorCode).send({ message: error.message })
   };
   
});

// Exercício 4
// a)
