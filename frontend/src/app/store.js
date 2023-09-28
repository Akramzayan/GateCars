import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../features/cars/carsSlice'
import authReducer from '../features/auth/authSlice'



export const store = configureStore({
    reducer:{
        auth: authReducer,
        cars: carReducer,


    }
})

