const mongoose =require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username :{
        type:String,
        required: true
    },
    password :{
        type:String,
        required:true
    },
    confirm :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    role:{
        type:String,
        default: "USER" 
    }

  
},{timestamp:true})
module.exports = mongoose.model('User',userSchema)
