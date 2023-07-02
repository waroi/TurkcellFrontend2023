import { createSlice } from "@reduxjs/toolkit";
import { getAllProductsFromDb } from "../../services/productService";
import { getMyCart } from "../../services/cartService";

const initialState = {
	cart: [],
};

async function getProductDetails(cart) {
	const products = await getAllProductsFromDb();
	const cartWithItems = [];
	for (const item of cart) {
		const foundProduct = products.find((p) => p.id === item.productId);
		if (foundProduct) {
			cartWithItems.push({ ...item, ...foundProduct });
		}
	}

	return cartWithItems;
}

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		setBasket: (state, action) => {
			state.cart = [...action.payload];
		},
		clearBasket: (state) => {
			state.cart = [];
		},
	},
});

export const { setBasket, clearBasket } = basketSlice.actions;

export const updateBasket = async (dispatch, userId, cart) => {
	if (!cart) cart = (await getMyCart(userId)).cart;
	const cartWithItems = await getProductDetails(cart);

	dispatch(setBasket(cartWithItems));
};

export default basketSlice.reducer;
