import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsFromDb, getProductByIdFromDb } from "../../services/productService";

const initialState = {
	products: [],
	loading: false,
	error: null,
};

export const getAllProducts = createAsyncThunk("product/getAllProducts", async () => {
	try {
		return await getAllProductsFromDb();
	} catch (error) {
		throw new Error("An error occurred while fetching the products.");
	}
});

export const getProductById = createAsyncThunk("product/getProductById", async (productId) => {
	try {
		console.log(productId);
		return await getProductByIdFromDb(productId);
	} catch (error) {
		throw new Error("An error occurred while fetching the product.");
	}
});

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		deleteProduct: (state, action) => {
			state.products = state.products.filter((product) => product.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.products = action.payload;
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(getProductById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductById.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.product = action.payload; // state.product güncellendi
			})
			.addCase(getProductById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
