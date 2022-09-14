const express = require('express')

const app = express();
const PORT = 3333;

require("./database")

// Routes
const authRouter = require('./routes/Auth')

app.use('/auth',authRouter);


app.listen(PORT,()=>{
    console.log(`Started at http://localhost:${PORT}`);
})