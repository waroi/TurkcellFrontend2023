import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../slices/Product";
import productOneReducer from "../slices/OneProduct";
import basketReducer from "../slices/Basket";
 const store = configureStore({
    reducer: {
     product:productReducer,
     productOne:productOneReducer,
     basket:basketReducer
      },
})

export default store;