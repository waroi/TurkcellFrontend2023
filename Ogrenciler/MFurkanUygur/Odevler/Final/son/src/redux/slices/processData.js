import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainDataArray:[]
}
export const processData = createSlice({
    name: "myProductDatas",
    initialState,
    reducers: {
        getData: (state, action) => {
            state.mainDataArray = action.payload
        },
    }
})

export const { getData } = processData.actions;

export default processData.reducer
