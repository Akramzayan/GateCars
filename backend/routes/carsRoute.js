const express = require("express");
const router = express.Router();
const {getCars,addCar,deleteCar, getCar} =require('../controllers/carController')

router.get("/",getCars )
router.get("/:id",getCar )
router.post("/create-car",addCar);
router.delete('/delete-car/',deleteCar)

  module.exports = router