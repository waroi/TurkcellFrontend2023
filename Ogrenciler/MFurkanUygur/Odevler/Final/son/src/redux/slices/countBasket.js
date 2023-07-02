import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

export const countBasket = createSlice({
    name: "countBasket",
    initialState,
    reducers: {
        updateCount: (state, action) => {
            state.count = action.payload
        },
      
    }
});

export const { updateCount} = countBasket.actions;

export default countBasket.reducer
