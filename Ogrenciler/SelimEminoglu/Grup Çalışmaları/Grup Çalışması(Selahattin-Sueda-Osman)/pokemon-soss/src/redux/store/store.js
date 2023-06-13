import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../slice/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
