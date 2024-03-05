import mongoose from "mongoose";
//Conecting DB 

const conectDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/appClients", {
            //Pasar objeto de configuracion

        });
        //URL y PORT donde se esta conectando

        console.log("mongoDB conectado  ");
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
}

export default conectDB;