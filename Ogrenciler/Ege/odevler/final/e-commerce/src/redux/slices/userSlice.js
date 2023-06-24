import { createSlice } from "@reduxjs/toolkit";

const storedUserData = localStorage.getItem("userData");
const initialState = {
  user: storedUserData ? JSON.parse(storedUserData) : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
