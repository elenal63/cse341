const express = require("express") 
const app = express() 
const home = require('./routes'); 

app.use('/', home);

const port = 3000;

app.listen(port, () => { 
    console.log(`Server is Running on port ${port}`) 
}) 