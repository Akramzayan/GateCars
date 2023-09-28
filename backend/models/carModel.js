const mongoose = require('mongoose')
const Schema = mongoose.Schema
const carSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    image:{
        type: String,
        required : false
    },
    RentPerHour:{
        type: Number ,
    },
    price:{
        type:Number
    },
    fuelType:{
        type:String
    },
    maxPersons:{
        type:Number
    }


 

},{timestamps: true})

module.exports = mongoose.model('Car',carSchema)