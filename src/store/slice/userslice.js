import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData= createAsyncThunk("userslice",async()=>{
const responed=await fetch("https://dummyjson.com/products");
const results=responed.json();
return results;
})

export const userslice= createSlice({
    name:"userslice",
    initialState:{
        products:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [getAllData.pending] :(state)=>{
            state.loading=true;
        },
        [getAllData.fulfilled] :(state,action)=>{
            state.loading=false;
            state.products = action.payload;
        },
        [getAllData.rejected] :(state,action)=>{
            state.loading=false;
            state.error = action.payload;
        },
    },
});

export default  userslice.reducer;