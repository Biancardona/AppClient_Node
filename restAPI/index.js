const express = require("express");
const routes = require("./routes");
//Creating express server
const app = express();
//Port
const port = 5000

app.use("/", routes())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
