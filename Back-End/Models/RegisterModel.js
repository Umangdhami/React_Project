const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    fname : {
        type: String,
        required: true
    },
    lname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    policy : {
        type: String,
        required: true
    },
    admin : {
        type: String,
        required: false
    }
})


module.exports = mongoose.model('Register', registerSchema)