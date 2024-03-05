import Clients from "../models/Clients.js"

//Register a new client
const register = async (req, res, next) => {
    //Register new Client
    //Creating a new instance or Client that brings all the schema
    const client = new Clients(req.body);
    try {

        //Create another instance or object using save()method.
        await client.save();
        res.json({ mensaje: "nuevo cliente creado" })

    } catch (error) {
        console.log(error)
        next()

    }
}

const getClients = async (req, res) => {
    try {
        //find method to filter the clients
        const clients = await Clients.find()
        res.json(clients)
    } catch (error) {
        console.log(error)
    }
}
export {
    register,
    getClients,
}
