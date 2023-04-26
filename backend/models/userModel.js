const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please add a name']
    },
    lname: {
        type: String,
        required: [true, 'Please add a name']
    },
    uname: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    age: {
        type: Number,
        required: [true, 'Please add your age']
    },
    contactNo: {
        type: Number,
        requried: [true, 'Please add your contact info']
    },
    following: {
        type: String
    },
    followers: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)