const mongoose = require('mongoose')

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
    }, 
    number: {
        type: Number,
        maxlength: 4,
        required: [true, 'Please provide a number'],
    },
    resetDay : {
        type: Number,
        required: [true, 'Please provide reset day'],
    },
    initialCredit: {
        type: Number,
        required: [true, 'Please provide initial credit'],
    }
})

module.exports = mongoose.model('Card', cardSchema)