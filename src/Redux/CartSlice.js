import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🛒 Fetch Cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState }) => {
    // const token = getState().auth.access;
    const token = localStorage.getItem("access");
    console.log("Token being sent:", token);
    const res = await axios.get("http://127.0.0.1:8000/api/cart/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
);

// 🛒 Add To Cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ product_id, quantity }, { getState }) => {
    const token = localStorage.getItem("access");
    console.log("Token being sent:", token, product_id, quantity); 
    const res = await axios.post(
      "http://127.0.0.1:8000/api/cart/add/",
      { product_id, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

// 🛒 Update Quantity
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }, { getState }) => {
    // const token = getState().auth.access;
    const token = localStorage.getItem("access");
    const res = await axios.post(
      `http://127.0.0.1:8000/api/cart/${id}/update_quantity/`,
      { quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity = action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    });
    builder.addCase(updateQuantity.fulfilled, (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity = action.payload.quantity;
      }
    });
  },
});

export default cartSlice.reducer;
