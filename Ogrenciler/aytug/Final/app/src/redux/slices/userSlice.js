import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: JSON.parse(localStorage.getItem("user") || null),
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("user", JSON.stringify(state.user));
		},
		clearUser: (state) => {
			state.user = null;
			localStorage.setItem("user", JSON.stringify(state.user));
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
