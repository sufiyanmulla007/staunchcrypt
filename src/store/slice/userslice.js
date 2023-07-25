import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData= createAsyncThunk("userslice",async(args,{rejectWithValue})=>{

const responed=await fetch("https://dummyjson.com/products");
try {
const results=responed.json();
return results;
} catch (error) {
    return rejectWithValue("ooops");
}

});

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