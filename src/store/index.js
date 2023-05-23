import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
