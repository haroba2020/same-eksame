const mongoose = require('mongoose')
const Schema = mongoose.Schema
//enkel schema for Eiere
const reinSchema = new Schema({
    navn: {
        type:String,
        required:true
    },
    serienummer: {
        type:String,
        unique: true,
        required:true
    },
    flokk:{
        type: String,
        required: true
    },
    fødselsdato: {
        type: String,
        required: true
    }
}, {timestamps: true });

const Rein = mongoose.model('rein', reinSchema);
module.exports = Rein