import { createSlice } from "@reduxjs/toolkit";

const initialState = ``;

const randomJokeSlice = createSlice({
  name: "randomJoke",
  initialState,
  reducers: {
    setJoke: (state, action) => {
      return action.payload;
    },
  },
});

export const { setJoke } = randomJokeSlice.actions;
export default randomJokeSlice.reducer;
