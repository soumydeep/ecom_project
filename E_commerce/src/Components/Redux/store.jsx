import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./Slice/cartSlice";

const store=configureStore({

    reducer:{
        cartReducer:cartSlice.reducer
    }
});

export default store;