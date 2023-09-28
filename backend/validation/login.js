const isEmpty =require('./isEmpty')
const validator = require('validator')

module.exports = function validateLogin(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : ""
    data.password = !isEmpty(data.password) ? data.password : ""

    if(!validator.isEmail(data.email)){
           errors.email = "Required Format Email"
        }

    if(validator.isEmpty(data.email)){
            errors.email = "Required Email"
        }
   
    
    if(validator.isEmpty(data.password)){
        errors.password ="Required Password"
    }
    


    


    
  
    return{
        errors,
        isValid : isEmpty(errors)
    }
}

