import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'temp',
  error: null,
  dataSingle: [],
  statusSingle: 'temp',
  errorSingle: null,
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
    },
    setLoadingSingle: (state) => {
      state.statusSingle = 'loading';
    },
    setDataSingle: (state, action) => {
      state.dataSingle = action.payload;
      state.statusSingle = 'succeeded';
    },
    setErrorSingle: (state, action) => {
      state.errorSingle = action.payload;
      state.statusSingle = 'failed';
    },
  },
});


export const {
  setLoading,
  setData,
  setError,
  setLoadingSingle,
  setDataSingle,
  setErrorSingle,
} = fetchLimitSlice.actions;

export default fetchLimitSlice.reducer;
