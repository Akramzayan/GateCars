const express = require('express')
const router = express.Router();
const {loginUser,SignupUser,Test, Admin} =require('../controllers/userController')
const passport = require('passport');
const { inRole, ROLES } = require('../security/Rolemiddleware');
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require('../controllers/profilesController');



router.post("/login",loginUser)

router.post("/Signup",SignupUser)

//Profile Route
router.post("/profiles")

//Add Profile
router.post("/profiles",passport.authenticate('jwt', { session: false }),AddProfile);
//get All Profiles
router.get("/profiles",passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),FindAllProfiles);
//GET Single Profile
router.get("/profile",passport.authenticate('jwt', { session: false }),FindSingleProfile);
//DELETE PROFILE
router.delete("/profiles/:id",passport.authenticate('jwt', { session: false }),inRole(ROLES.ADMIN),DeleteProfile);


module.exports = router;