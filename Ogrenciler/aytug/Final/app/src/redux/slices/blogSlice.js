import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesFromDb } from "../../services/blogService";

const initialState = {
	articles: [],
	loading: false,
	error: null,
};

export const getAllArticles = createAsyncThunk("blog/getAllArticles", async () => {
	try {
		return await getAllArticlesFromDb();
	} catch (error) {
		throw new Error("Makaleler alınırken bir hata oluştu.");
	}
});

export const blogSlice = createSlice({
	name: "article",
	initialState,
	reducers: {
		addArticle: (state, action) => {
			state.articles.push(action.payload);
		},
		deleteArticle: (state, action) => {
			state.articles = state.articles.filter((article) => article.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllArticles.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllArticles.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.articles = action.payload;
			})
			.addCase(getAllArticles.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { addArticle, deleteArticle } = blogSlice.actions;

export default blogSlice.reducer;
