require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser");
const session  = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')

const app = express();
const PORT = 3333;

require("./database")
// USING MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded());

app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/ToDoList'
    })
}))
app.use(passport.initialize());
app.use(passport.session())

// Routes
const authRouter = require('./routes/Auth')
const listRouter = require('./routes/List')
app.use('/auth',authRouter);
app.use('/list',listRouter);


app.listen(PORT,()=>{
    console.log(`Started at http://localhost:${PORT}`);
})