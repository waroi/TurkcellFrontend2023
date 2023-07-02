import BASE_URL from "./api";

const URL = `${BASE_URL}/products`;

export const getAllProductsFromDb = async () => {
	try {
		const response = await fetch(`${URL}`);
		if (!response.ok) {
			throw new Error("Ürünler alınamadı");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ürünler alınırken hata oluştu:", error);
		throw error;
	}
};

export const getProductByIdFromDb = async (id) => {
	try {
		const response = await fetch(`${URL}/${id}`);
		if (!response.ok) {
			throw new Error("Ürün alınamadı");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Ürün alınırken hata oluştu:", error);
		throw error;
	}
};

export const updateProduct = async (id, newProduct) => {
	try {
		const response = await fetch(`${URL}/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		if (!response.ok) {
			throw new Error("Product could not be updated on database");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Something went wrong while updating product:", error);
		throw error;
	}
};
