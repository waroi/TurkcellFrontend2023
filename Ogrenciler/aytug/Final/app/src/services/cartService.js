import BASE_URL from "./api";
import { getAllProductsFromDb, updateProduct } from "./productService";

const URL = `${BASE_URL}/carts`;

export const getMyCart = async (cartId) => {
	try {
		const response = await fetch(`${URL}/${cartId}`);
		if (!response.ok) {
			return { cart: [], exists: false }; // kullanıcının henüz sepeti yok, yani boş sepet
		}
		const data = await response.json();
		return { ...data, exists: true };
	} catch (error) {
		console.error("Sepet verisi alınırken hata oluştu:", error);
		throw error;
	}
};

export const addItemToCart = async (cartId, productDetails) => {
	try {
		const allProducts = await getAllProductsFromDb();

		let { cart, exists } = await getMyCart(cartId);

		const product = allProducts.find((p) => p.id === productDetails.productId);

		if (!product) throw Error("Item you are trying to add could not be found.");

		const existingCartItem = cart.find((p) => p.productId === productDetails.productId);

		if (existingCartItem) {
			existingCartItem.quantity = Math.min(
				existingCartItem.quantity + productDetails.quantity,
				product.rating.count
			);
		} else {
			cart.push({ ...productDetails, quantity: Math.min(productDetails.quantity, product.rating.count) });
		}

		cart = cart.filter((p) => p.quantity !== 0);

		let response;
		if (exists) {
			response = await fetch(`${URL}/${cartId}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: cartId, cart }),
			});
		} else {
			response = await fetch(`${URL}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: cartId, cart }),
			});
		}
		if (!response.ok) {
			throw new Error("Sepete yeni ürün eklenemedi");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Sepet verisi güncellenirken hata oluştu:", error);
		throw error;
	}
};

export const checkoutCart = async (cartId) => {
	try {
		const allProducts = await getAllProductsFromDb();

		let { cart } = await getMyCart(cartId);

		if (!cart || cart.length === 0) throw Error("You don't have any items in your cart that you can checkout.");

		let cartTotal = 0;

		for (const item of cart) {
			const product = allProducts.find((p) => p.id === item.productId);

			if (!product) throw Error(`Item #${item.productId} could not be found.`);

			if (item.quantity > product.rating.count)
				throw Error(
					`You cannot buy ${item.quantity} ${product.title}(s), you can buy up to ${product.rating.count} piece(s).`
				);

			cartTotal += item.quantity * product.price;

			await updateProduct(product.id, {
				...product,
				rating: {
					rate: product.rating.rate,
					count: product.rating.count - item.quantity,
				},
			});
		}

		const response = await fetch(`${URL}/${cartId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: cartId, cart: [] }),
		});

		if (!response.ok) {
			throw new Error("Could not check-out cart items.");
		}

		return cartTotal;
	} catch (error) {
		console.error("Something went wrong while checking-out cart:", error);
		throw error;
	}
};
