import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async () => {
    const response = await fetch("https://fakestoreapi.com/product/1");
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>{
    builder
      .addCase(fetchProductById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
    }
});

export default productsSlice.reducer;
