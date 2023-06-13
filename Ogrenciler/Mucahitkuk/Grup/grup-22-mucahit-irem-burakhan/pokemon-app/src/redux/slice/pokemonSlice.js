import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';


export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();

  const pokemons = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const pokemonData = await res.json();
      return {
        name: pokemon.name,
        data: pokemonData,
      };
    })
  );

  console.log(pokemons)
  return pokemons;
});


const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    data: [],
    loading: false,
    error: null,
    graphics: true,
  },
  reducers: {
    getRTX: (state, action) => {
      state.graphics = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const {getRTX} = pokemonSlice.actions;

export default pokemonSlice.reducer;