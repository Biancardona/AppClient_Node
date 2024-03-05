import mongoose, { Schema } from 'mongoose';
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const clientsSchema = new Schema({
    name:
    {
        type: String,
        trim: true
    },
    lastName:
    {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        lowercase: true,
        trim: true,
    },
    telefono:
    {
        type: String,
        trim: true,
    },
    date:
    {
        type: Date,
        trim: true,
        default: Date.now(),
    }

},

)


//Register as a model that has to interact with DB, as a second argument
//in the schema that is telling how will be the schema in the DB
const Clients = mongoose.model("Clients", clientsSchema);

export default Clients;
