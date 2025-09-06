import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/products/");
    
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => { state.loading = true; });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, state => { state.loading = false; });
  }
});

export default ProductSlice.reducer;
