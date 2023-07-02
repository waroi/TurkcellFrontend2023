import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUser, clearUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
