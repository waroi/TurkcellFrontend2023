import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveUser: false,
  activeUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    activeUserEnter: (state) => {
      state.isActiveUser = true;
    },
    activeUserExit: (state) => {
      state.isActiveUser = false;
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { activeUserEnter, activeUserExit, setActiveUser } =
  userSlice.actions;

export default userSlice.reducer;
