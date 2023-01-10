const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

flokkSchema = new mongoose.Schema({
    eier:{
        type:String,
        required:true,
    },
    navn:{
        type:String,
        required:true
    },
    serieinndeling:{
        type:String,
        required:true,
    },
    buemerke:{
        type:String,
        required:true,
    },
    bumerkeBilde:{
        data: Buffer,
        Type: String,
    }
})

const Flokk = mongoose.model('flokk',flokkSchema)

module.exports = Flokk