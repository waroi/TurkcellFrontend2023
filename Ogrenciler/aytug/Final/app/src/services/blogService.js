import BASE_URL from "./api";

const URL = `${BASE_URL}/articles`;

export const getAllArticlesFromDb = async () => {
	try {
		const response = await fetch(`${URL}`);
		if (!response.ok) {
			throw new Error("Makaleler alınamadı");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Makaleler alınırken hata oluştu:", error);
		throw error;
	}
};

export const getArticleById = async (id) => {
	try {
		const response = await fetch(`${URL}/${id}`);
		if (!response.ok) {
			throw new Error("Makale alınamadı");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Makale alınırken hata oluştu:", error);
		throw error;
	}
};
