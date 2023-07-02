import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  filterOptions: [],
  sortOption: "default",
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterOptions: (state, action) => {
      const updatedOptions = action.payload;
      state.filterOptions = updatedOptions;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setFilterOptions,
  setSortOption,
  setFilteredProducts,
} = filterSlice.actions;

export default filterSlice.reducer;