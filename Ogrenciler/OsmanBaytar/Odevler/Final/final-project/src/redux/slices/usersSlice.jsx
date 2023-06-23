import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../../utils/Request";

const initialState = {
  users: [
    userRequest
      .get()
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err)),
  ],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { getUsers, addUsers } = usersSlice.actions;

export default usersSlice.reducer;
