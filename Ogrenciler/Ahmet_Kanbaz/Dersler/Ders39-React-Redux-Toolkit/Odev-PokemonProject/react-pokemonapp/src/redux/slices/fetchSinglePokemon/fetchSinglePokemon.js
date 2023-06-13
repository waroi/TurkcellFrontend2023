import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [],
  status: 'temp',
  error: null
};

const fetchSinglePokemon = createSlice({
  name: 'fetchSinglePokemon',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = 'loading';
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
      console.log(state.data)
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'error'
    }
  },
})

export const fetchSingle = (pokemonName) => async (dispatch) => {
  try {
    dispatch(fetchSinglePokemon.actions.setLoading());
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    dispatch(fetchSinglePokemon.actions.setData(response.data));
  }
  catch (error) {
    dispatch(fetchSinglePokemon.actions.setError(error.message))
  }
}

export const {setLoading, setData, setError} = fetchSinglePokemon.actions;

export default fetchSinglePokemon.reducer;