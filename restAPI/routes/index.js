const express = require('express');
const router = express.Router();


module.exports = function () {
    //The app responds with “Hello World!” for requests to the root URL (/) or route. 
    router.get("/", (req, res) => {
        res.send('inicio')
    })
    return router
}

