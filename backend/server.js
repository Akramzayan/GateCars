const cors = require('cors')
const express = require ('express')
const app = express()
const connectDB  = require('./db')
const port =   5000
const usersRoutes = require('./routes/usersRoute')
const carRoutes = require('./routes/carsRoute')
const passport = require('passport')
//require("dotenv").config();
const bookingRoutes = require('./routes/bookingRoute')
const profileRoutes = require('./routes/profileRoutes')




app.use(cors({ origin: ['http://localhost:3000'],  credentials: true}))

app.use(express.json())
//Routes
app.use('/api/users/',usersRoutes)
app.use('/api/cars',carRoutes)
app.use('/api/booking',bookingRoutes)
app.use('/api/profile',profileRoutes)




//Passport 

app.use(passport.initialize())
require('./security/passport')(passport)





app.listen(port,() => {
    console.log('Node server started in Port  ',port)

})


