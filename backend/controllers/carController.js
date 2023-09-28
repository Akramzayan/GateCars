const Car = require('../models/carModel')
const mongoose = require('mongoose')
//GET ALL CARS
const getCars = async (req, res) => {
    try {
      const cars = await Car.find();
      res.json(cars);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

const getCar = async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      res.json(car);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
//ADD Car
  const addCar =  async (req, res) => {
    try {
      const newcar = new Car(req.body);
      await newcar.save();
      res.send("Car added successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  }

//delete CAR

const deleteCar = async (req, res) => {
  const { id } = req.params
  if( !mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error : 'no such workout'})
  }
  const car = await Car.findOneAndDelete({_id: id})
  if(!car){
      res.status(404).json({error : 'no such workout'})
  }
  res.status(200).json(car)
}


module.exports={
    getCars,
    addCar,
    deleteCar,
    getCar
  
   
}