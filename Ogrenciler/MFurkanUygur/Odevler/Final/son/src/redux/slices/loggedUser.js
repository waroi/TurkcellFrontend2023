import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedUserObject: sessionStorage.getItem('loggedUser') ? sessionStorage.getItem('loggedUser') : "noUser",
    isAdminLog: sessionStorage.getItem('loggedUser') ? JSON.parse(sessionStorage.getItem('loggedUser')).isAdmin : false
}

export const loggedUser = createSlice({
    name: "loginUser",
    initialState,
    reducers: {
        setLoginUser: (state, action) => {
            sessionStorage.setItem('loggedUser', JSON.stringify(action.payload));
            return action.payload;
        },
        clearLoginUser: () => {
            sessionStorage.clear();
            return null;
        },
        updateIsAdmin: (state) => {
            state.isAdminLog = JSON.parse(sessionStorage.getItem('loggedUser')).isAdmin
        }
    }
});

export const { setLoginUser, clearLoginUser, updateIsAdmin } = loggedUser.actions;

export default loggedUser.reducer

