const mongoose = require('mongoose')
require('dotenv').config()
//connect to db 
function connectDB() {
    mongoose.connect(process.env.MONGODB)
    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log('Mongo DB connection Succesfully')
    })
    connection.on('error',() => {
        console.log('Mong DB connection Error')
    })
}
connectDB()
module.exports = mongoose