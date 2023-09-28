
const Profile= require('../models/profileModel')
const validateProfile = require ('../validation/Profile')

const AddProfile = async(req , res) => {
   const {errors,isValid} = validateProfile(req.body)
   try {
    if(!isValid){
      res.status(404).json(errors)
    }
    else {
      Profile.findOne({user : req.user.id})
      .then(async profile => {
         if(!profile){
            //req.body.user = req.user.id
            await Profile.create({user: req.user.id ,...req.body})
            res.status(200).json({message:'success'})
         }
         else {
            await Profile.findOneAndUpdate(
               {_id: profile._id},
               //{user : req.user.id},
               req.body,
               {new : true}
            ).then(result => {
               res.status(200).json(result)
            }

            )
         }
      })
    }
    
   } catch (error) {
      res.status(404).json(error.message)
      
   }

}



const FindAllProfiles = async(req , res) => {
   try {
      const data = await Profile.find().populate('user',['username','email','role'])
      res.status(200).json(data)
   } catch (error) {
      res.status(404).json(error.message)
   }
 
 }




 const FindSingleProfile = async(req , res) => {
  try {
   const data = await Profile.findOne({user: req.user.id}).populate('user',['username','email','role'])
   res.status(200).json(data)
   
  } catch (error) {
   res.status(404).json(error.message)
   
  }
 }





 const DeleteProfile = async(req , res) => {
   try {
      const data = await Profile.findOneAndDelete({_id: req.params.id})
      res.status(200).json({message:'Profile Deleted'})
      
   } catch (error) {
      res.status(404).json(error.message)
      
   }
 
 }

 module.exports ={
    AddProfile,
    FindAllProfiles,
    FindSingleProfile,
    DeleteProfile
 }