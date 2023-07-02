import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  searchData: "",
  dataDetail: [],
  singleData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortData: (state, action) => {
      if (action.payload.sortObj.shape === "A-Z") {
        if (action.payload.sortObj.category === "price") {
          state.data = action.payload.data.sort((a, b) => a.price - b.price);
        }
        if (action.payload.sortObj.category === "title") {
          state.data = action.payload.data.sort((a, b) => {
            const nameA = a.title.charAt(0).toUpperCase();

            const nameB = b.title.charAt(0).toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        }
        if (action.payload.sortObj.category === "category") {
          state.data = action.payload.data.sort((a, b) => {
            const nameA = a.category.charAt(0).toUpperCase();

            const nameB = b.category.charAt(0).toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        }
      } else {
        if (action.payload.sortObj.category === "price") {
          state.data = action.payload.data.sort((a, b) => b.price - a.price);
        }

        if (action.payload.sortObj.category === "title") {
          state.data = action.payload.data.sort((a, b) => {
            const nameA = a.title.charAt(0).toUpperCase();

            const nameB = b.title.charAt(0).toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          });
        }
        if (action.payload.sortObj.category === "category") {
          state.data = action.payload.data.sort((a, b) => {
            const nameA = a.category.charAt(0).toUpperCase();

            const nameB = b.category.charAt(0).toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          });
        }
      }
    },
    getSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});
export const { addData, sortData, getSearchData } = dataSlice.actions;

export default dataSlice.reducer;
