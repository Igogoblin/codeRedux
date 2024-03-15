import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../parts/products/ProductsSlice";
import sellersReducer from "../parts/sellers/sellersSlice";

export default configureStore({
  reducer: productsReducer,
  sellers: sellersReducer,
});
