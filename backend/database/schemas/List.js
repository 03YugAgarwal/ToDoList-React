const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    topic:{
        type: mongoose.SchemaTypes.String,
        required: true
    },
    tag:{
        type: mongoose.SchemaTypes.String,
        default: ""
    }
})


module.exports = mongoose.model('list',ListSchema);