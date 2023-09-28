const express = require('express')
const Booking = require('../models/bookingModel')
const Car = require('../models/carModel')
const router = express.Router()

router.post('/bookcar',async(req, res) => {
        req.body.transactionId = '1234'
        try {
         const newBooking = new Booking(req.body)
         await newBooking.save()
         const car = await Car.fondOne({_id:req.body.car})
        car.bookedTimeSlots.push(req.body.bookedTimeSlots)
        await car.save()
         res.send('Your Booking is Successful ')

        } catch (error) {
            res.send(404).json(error)
            
        }


})

module.exports = router