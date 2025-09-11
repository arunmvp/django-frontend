import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 🛒 Fetch Cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState }) => {
    const token = localStorage.getItem("access");
    const res = await axios.get("https://django-ecommerce-95xj.onrender.com/api/cart/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  }
);

// 🛒 Add To Cart
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ product_id, quantity }, { getState }) => {
    const token = localStorage.getItem("access");
    const res = await axios.post(
      "https://django-ecommerce-95xj.onrender.com/api/cart/add/",
      { product_id, quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  }
);

// 🛒 Update Quantity
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }, { getState }) => {
    const token = localStorage.getItem("access");
    const res = await axios.post(
      `https://django-ecommerce-95xj.onrender.com/api/cart/${id}/update_quantity/`,
      { quantity },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  }
);

// 🛒 Remove From Cart
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id, { getState }) => {
    const token = localStorage.getItem("access");
    await axios.delete(
      `https://django-ecommerce-95xj.onrender.com/api/cart/${id}/remove/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return id; // return deleted item id
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
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    });
  },
});

export default cartSlice.reducer;
