const User = require('../models/userModel')
const validateSignup = require('../validation/signup')
const validateLogin = require ('../validation/login')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const loginUser = async (req,res) => {
        const {errors,isValid} =validateLogin(req.body)
    try {
        if(!isValid) {
            res.status(404).json(errors)

        }
        else {
            User.findOne({email: req.body.email})
            .then(user => {
                if(!user){
                    errors.email = "User Not Found"
                    res.status(404).json(errors)
                }else {
                    bcrypt.compare(req.body.password,user.password)
                    .then(isMatch => {
                        if(!isMatch){
                            errors.password = "Incorrect Password"
                            res.status(404).json(errors)

                        }
                        else {
                            var token = jwt.sign({ 
                                id : user._id,
                                name:user.name,
                                email:user.email,
                                role:user.role
                            },privateKey= process.env.SECRET_KEY, { expiresIn:'4d' });

                            res.status(200).json(
                                {
                                    message :'Success',
                                    data: user,
                                    token :token
                                }
                            )

                        }

                    })
                }
            })
            

        }
    } catch (error) {
        res.status(404).json(error.message);
        
    }
   
     
   
       
 
}


const SignupUser = async(req,res) => {
    const {errors,isValid} =validateSignup(req.body)
    try {
        if(!isValid){
            return  res.status(400).json(errors);
        }
        else {
          await User.findOne({email: req.body.email})
           .then(async (exist) => {
            if(exist) {
                errors.email = 'User exist'
                res.status(404).json(errors)
            }
            else {
                const hash = bcrypt.hashSync(req.body.password , 10) // HASHED PASSWORD 
                req.body.password = hash //Sending the hashed password to db 
                const newUser =  await User.create(req.body)
                //const newUser = new User (req.body)
                // await newUser.save()
                //res.send ('user Registered Successfully')
                res.status(200).json(newUser)
            }
      
           })
        }
    
    } catch (error) {
        res.status(400).json({error : error.message})
        
    }
}
const Test = (req, res) => {
    res.send("welcome User")
    //res.send(req.user)
}
const Admin = (req, res) => {
    res.send('welcome admin ')
}

module.exports ={
    loginUser,
    SignupUser,
    Test,
    Admin
        };
