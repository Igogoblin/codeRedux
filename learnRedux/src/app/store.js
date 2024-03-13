import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../parts/products/ProductsSlice";

export default configureStore({
  reducer: productsReducer,
});
