import express from "express";
import conectDB from "./config/db.js";
import routes from "./routes/index.js";


//Creating express server
const app = express();

app.use(express.json());
//Calling the function that will conect the DB
conectDB()
//Port
const port = 5000

app.use("/", routes)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
