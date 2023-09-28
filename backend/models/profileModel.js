const mongoose =require('mongoose');
const Schema = mongoose.Schema

const ProfileSchema = new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    Tel :{
        type:String,
        required: true
    },
    Country :{
        type:String,
        required:true
    },
    City :{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
        
       
    },
    Bio:{
        type:String,
        
    },
    Address :{
        type:String
    }
  
  
},{timestamp:true})
module.exports = mongoose.model('Profile',ProfileSchema)