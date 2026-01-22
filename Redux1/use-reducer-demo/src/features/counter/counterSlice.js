import { createSlice } from "@reduxjs/toolkit";
 
// counter state is object-{value : 0}
const initialState = {
  value: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
      increment: (state, action) => {
        state.value += 1;
      },
      decrement: (state, action) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      }
    },
  // Actions would automatically be created by create slice
    // actions: {
    //     increment: () => {
    //         return {type: 'counter/increment'}
    //     },
    //     decrement: () => {
    //         return {type: 'counter/decrement'}
    //     },
    //     incrementByAmount: (payload) => {
    //         return {type: 'counter/incrementByAmount', payload:payload}
    //     }
    // }
});
// we need to export 2 things from here.

// Here we are exporting all the actions create by createSlice corresponding to each reducer function.

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// We are exporting a combined reducer function created by createSlice method

export default counterSlice.reducer;
