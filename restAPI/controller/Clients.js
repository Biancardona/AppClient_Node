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

const getSigleClient = async (req, res) => {
    const { id } = req.params
    try {
        const client = await Clients.findById(id)
        if (!client) {
            const error = new Error("Cliente no existe")
            return res.status(404).json({ msg: error.message })
        }
        if (client) {
            res.json(client);
        }

    } catch (error) {
        console.log(error)

    }
}

const updateClient = async (req, res) => {
    const { id } = req.params
    try {
        const updateClient = await Clients.findOneAndUpdate({ _id: id },
            req.body, {
            new: true
        });
        res.json(updateClient)

    } catch (error) {
        console.log(error);
    }
}
const deleteClient = async (req, res) => {
    const { id } = req.params
    try {
        await Clients.findOneAndDelete({ _id: id },
            res.json({ msg: "Cliente Eliminado" }))

    } catch (error) {
        console.log(error)

    }
}
export {
    register,
    getClients,
    getSigleClient,
    updateClient,
    deleteClient,
}
