const isEmpty =require('./isEmpty')
const validator = require('validator')

module.exports = function validateSignup(data) {
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : ""
    data.password = !isEmpty(data.password) ? data.password : ""
    data.email = !isEmpty(data.email) ? data.email : ""
    data.confirm = !isEmpty(data.confirm) ? data.confirm :""

    if(validator.isEmpty(data.username)) {
        errors.username ="Required Name"
    }
    if(validator.isEmpty(data.password)){
        errors.password ="Required Password"
    }

     if(!validator.isEmail(data.email)){
            errors.email = "Required Format Email"
        }
    
    
    if(validator.isEmpty(data.email)){
        errors.email = "Required Email"
    }

    if (!validator.equals(data.password,data.confirm)){
        errors.confirm ="Passwords Not matches";
    }

    if (validator.isEmpty(data.confirm)){
        errors.confirm= "Required Confirm"
    }

    
  
    return{
        errors,
        isValid : isEmpty(errors)
    }
}

