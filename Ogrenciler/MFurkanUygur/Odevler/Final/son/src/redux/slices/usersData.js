import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainUsersArray: []
}
export const usersData = createSlice({
    name: "myUsersDatas",
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.mainUsersArray = action.payload
        },
    }
})

export const { getUser } = usersData.actions;

export default usersData.reducer

