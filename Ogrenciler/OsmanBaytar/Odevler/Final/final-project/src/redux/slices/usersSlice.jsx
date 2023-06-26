import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../../utils/Request";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      userRequest.post(action.payload);
    },
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
