import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../utils/request";

const initialState = {
  blogs: fetchPosts(),

};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const { addBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
