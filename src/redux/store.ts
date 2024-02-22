import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import category from "./slices/category";
import products from "./slices/products";
import filters from "./slices/filter";
import singleProduct from "./slices/singleProduct";

export const store = configureStore({
  reducer: {
    category,
    products,
    filters,
    singleProduct,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;