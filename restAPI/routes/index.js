import express from "express";
const router = express.Router();
import {
    register,
    getClients,
    getSigleClient,
    updateClient,
    deleteClient,

} from "../controller/Clients.js"
//Router() es un método que proporciona Express.js para crear un nuevo enrutador

router


    .post("/clients", register)//Homepage
    .get("/clients", getClients)//Get all clients
    .get("/clients/:id", getSigleClient)
    .put("/clients/:id", updateClient)
    .delete("/clients/:id", deleteClient)



export default router


