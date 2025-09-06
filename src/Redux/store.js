import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
