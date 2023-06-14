import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchJoke: [],
};

const searchJokeSlice = createSlice({
  name: "searchJoke",
  initialState,
  reducers: {
    setSearchJoke: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchJoke } = searchJokeSlice.actions;
export default searchJokeSlice.reducer;
