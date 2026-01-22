import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterSlice from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
