import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
const data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const initialState = {
    user: data,
    token: token,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    errorData:{}
}


export const signUpUser = createAsyncThunk("signup", async(user,thunkAPI)=>{
    try{
        return await authService.signup(user)
    }
    catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const loginUser = createAsyncThunk("login", async(user,thunkAPI)=>{
    try{
        return await authService.login(user)
    }
    catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})


export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(signUpUser.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(signUpUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
        })
        .addCase(signUpUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.error
            state.errorData=action.payload.response.data
        })
        .addCase(loginUser.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.error
        })
    }
})

export default authSlice.reducer