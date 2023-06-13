import { createSlice } from "@reduxjs/toolkit";
export const jokeSlice = createSlice({
  name: "joke",
  initialState: {
    joke: "",
    loading: false,
    error: "",
    jokes: [],
    categories: [],
  },
  reducers: {
    getRandomJoke: (state, action) => {
      state.joke = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setJoke: (state, action) => {
      state.joke = action.payload;
    },
    setJokes: (state, action) => {
      state.jokes = action.payload.map((joke) => joke.value);
    },
  },
});

export const { getRandomJoke, setCategories, setJoke, setJokes } =
  jokeSlice.actions;
export default jokeSlice.reducer;
