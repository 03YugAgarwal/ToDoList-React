const mongoose = require('mongoose')

var db = mongoose.connect('mongodb://127.0.0.1:27017/ToDoList')
    .then(()=>{console.log('Connected to mongoose')})
    .catch((e)=>{console.log(e)});