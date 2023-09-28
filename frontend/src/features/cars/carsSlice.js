import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carService from "./carsService";


const initialState = {
    cars: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
}


export const getCars = createAsyncThunk("get/cars", async(thunkAPI)=>{
    try{
        return await carService.getCars()
    }
    catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const getCar = createAsyncThunk("get/car", async(id, thunkAPI)=>{
    try{
        return await carService.getCar(id)
    }
    catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})


export const carSlice = createSlice({
    name: "cars",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getCars.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(getCars.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.cars=action.payload
        })
        .addCase(getCars.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.error
        })
        .addCase(getCar.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(getCar.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.singleCar=action.payload
        })
        .addCase(getCar.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.error
        })
    }
})

export default carSlice.reducer