import { createSlice } from "@reduxjs/toolkit";

const initialState = ``;

const randomJokeSlice = createSlice({
  name: "randomJoke",
  initialState,
  reducers: {
    setRandomJoke: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRandomJoke } = randomJokeSlice.actions;
export default randomJokeSlice.reducer;
