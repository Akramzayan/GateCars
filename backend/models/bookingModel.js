const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookingSchema =new Schema({
    car: { 
        type:Schema.Types.ObjectId,
        ref: "Car"
    },
    user :{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    bookedTimeSlots :{
        from : {type:String},
        to : {type:String}},
    TotalHours: {
        type:Number
    },
    TotalAmount: {
        type:Number
    },
    transactionId:{
        type:String
    },
    driverRequired : {
        type:Boolean
    }
})

const bookingModel = mongoose.model('Booking',bookingSchema)

module.exports = bookingModel