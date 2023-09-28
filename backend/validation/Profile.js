const isEmpty =require('./isEmpty')
const validator = require('validator')

module.exports = function validateProfile(data) {
    let errors = {};
    data.Tel = !isEmpty(data.Tel) ? data.Tel : ""
    data.City = !isEmpty(data.City) ? data.City : ""
    data.Country = !isEmpty(data.Country) ? data.Country : ""
    data.postalCode = !isEmpty(data.postalCode) ? data.postalCode :""

    if(validator.isEmpty(data.Tel)) {
        errors.Tel ="Required Name"
    }
    if(validator.isEmpty(data.City)){
        errors.City ="Required City"
    }

    if(validator.isEmpty(data.Country)){
        errors.Country = "Required Country"
    }

    
    if(validator.isEmpty(data.postalCode)){
        errors.postalCode = "Required postalCode"
    }




  
    return{
        errors,
        isValid : isEmpty(errors)
    }
}

