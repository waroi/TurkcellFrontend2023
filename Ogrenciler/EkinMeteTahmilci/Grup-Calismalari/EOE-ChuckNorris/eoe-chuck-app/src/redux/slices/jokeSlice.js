import { createSlice } from "@reduxjs/toolkit";

const jokeState = { joke: [] };

// const fetchRandomJoke = (category) => {
//   if (category == "All") {
//     return fetch("https://api.chucknorris.io/jokes/random")
//       .then((res) => res.json())
//       .then((data) => data);
//   } else {
//     return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
//       .then((res) => res.json())
//       .then((data) => data);
//   }
// };

export const jokeSlice = createSlice({
  name: "joke",
  jokeState,
  reducers: {
    getJoke: (state, action) => {
      state.joke = state.joke.push(action.payload);
    },
  },
});

export const getJoke = jokeSlice.actions;
export default jokeSlice.reducer;
