const mongoose = require('mongoose')
const Schema = mongoose.Schema
//enkel schema for Eiere
const ownerSchema = new Schema({
    navn: {
        type:String,
        required:true
    },
    personnummer: {
        type:String,
        unique: true,
        required:true
    },
    kontaktspråk:{
        type: String,
        required: true
    },
    telefonnummer: {
        type: String,
        required: true
    }
}, {timestamps: true });

const Owner = mongoose.model('owner', ownerSchema);
module.exports = Owner