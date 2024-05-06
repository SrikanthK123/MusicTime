import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data : [],
};
const songSlice = createSlice({
    name : 'songs',
    initialState,
    reducers : {
       
    }
})


export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;
