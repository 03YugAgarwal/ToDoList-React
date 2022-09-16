require('dotenv').config()
const express = require('express')
const session  = require('express-session')
const passport = require('passport')

const app = express();
const PORT = 3333;

require("./database")

// Routes
const authRouter = require('./routes/Auth')

app.use(session({secret: process.env.SESSION_SECRET}))
app.use('/auth',authRouter);
app.use(passport.session())



app.listen(PORT,()=>{
    console.log(`Started at http://localhost:${PORT}`);
})