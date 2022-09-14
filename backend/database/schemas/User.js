const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    discordId:{
        type: mongoose.SchemaTypes.String,
        required: true
    },
    createdAt:{
        type: mongoose.SchemaTypes.Date,
        default: new Date()
    }
})

module.exports = mongoose.model('user',UserSchema);