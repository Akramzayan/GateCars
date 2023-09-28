const mongoose = require('mongoose')
require('dotenv').config()
//connect to db 
function connectDB() {
    mongoose.connect('mongodb+srv://akrammongo:mongo123@cluster0.z8ey1jj.mongodb.net/GateCars')
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