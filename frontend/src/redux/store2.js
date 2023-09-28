import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../features/cars/carsSlice'



export const store = configureStore({
    reducer:{
        cars: carReducer,
    }
})

