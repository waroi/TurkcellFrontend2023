import { configureStore } from "@reduxjs/toolkit"
import characterReducer from "../Slices/pokemon";

 const store = configureStore({
    reducer: {
        character: characterReducer,
      },
})

export default store;