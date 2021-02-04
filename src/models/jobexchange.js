'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobExchangeSchema = Schema({
    name: {type: String, required: true},
    age: {type:Number, default: 0, required:true},
    gender: {type: String,enum:['male','female'], required: true},
    email : {type: String, required: true},
    phone: {type:Number, required:true},
    vacant: {type: String, required: true},
    civilStatus: {type: String, required: true}
},{
    timestamps:true
})
module.exports = mongoose.model('jobexchanges',JobExchangeSchema)