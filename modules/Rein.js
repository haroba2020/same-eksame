const mongoose = require('mongoose')
const Schema = mongoose.Schema
//enkel schema for Eiere
const reinSchema = new Schema({
    navn: {
        type:String,
        required:true
    },
    Serienummer: {
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

const Reinsdyr = mongoose.model('rein', reinSchema);
module.exports = Eier