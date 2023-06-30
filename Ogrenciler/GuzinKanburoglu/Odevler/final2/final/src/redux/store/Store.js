import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../slices/Product";
import productOneReducer from "../slices/OneProduct";
import loginReducer from "../slices/Login";
 const store = configureStore({
    reducer: {
     product:productReducer,
     productOne:productOneReducer,
     login:loginReducer
      },
})

export default store;