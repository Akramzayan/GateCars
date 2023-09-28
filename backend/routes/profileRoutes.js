const express = require("express");
const router = express.Router();
const { FindAllProfiles, FindSingleProfile, AddProfile, DeleteProfile } = require('../controllers/profilesController')

router.get("/", FindAllProfiles)
router.get("/:id",FindSingleProfile )
router.post("/create-profile",AddProfile)
router.delete('/delete-profile/',DeleteProfile)

  module.exports = router