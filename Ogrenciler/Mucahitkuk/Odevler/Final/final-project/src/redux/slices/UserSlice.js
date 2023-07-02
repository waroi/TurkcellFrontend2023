import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem('loggedInUser')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { addUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;