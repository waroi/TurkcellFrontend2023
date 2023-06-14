import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'temp',
  error: null
};

const fetchLimitSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = 'loading';
    },
    setData: (state, action) => {
      state.data = action.payload;
      state.status = 'succeeded';
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    }
  },
});


export const {
  setLoading,
  setData,
  setError
} = fetchLimitSlice.actions;

export default fetchLimitSlice.reducer;
