import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [],
  status: 'temp',
  error: null
};

const fetchLimit = createSlice({
  name: 'fetchLimit',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = 'loading';
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'error'
    }
  },
})

export const fetchLimitFunction = () => async (dispatch) => {
  try {
    dispatch(fetchLimit.actions.setLoading());
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    dispatch(fetchLimit.actions.setData(response.data.results));
  }
  catch (error) {
    dispatch(fetchLimit.actions.setError(error.message))
  }
}

export const {setLoading, setData, setError} = fetchLimit.actions;

export default fetchLimit.reducer;