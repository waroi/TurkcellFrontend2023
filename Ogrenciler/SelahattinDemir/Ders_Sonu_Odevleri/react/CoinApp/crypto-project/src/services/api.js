export const getAllCryptoCurrencies = async () => {
	const response = await fetch(`${import.meta.env.VITE_URL}`);
	const data = await response.json();
	return data;
};

export const getCryptoCurrencyById = async (id) => {
	const response = await fetch(`${import.meta.env.VITE_URL}/${id}`);
	const data = await response.json();
	return data;
};

export const getCryptoCurrencyBySymbol = async (symbol) => {
	const response = await fetch(`${import.meta.env.VITE_CHARTURL}/${symbol}/market_chart?vs_currency=usd&days=7`);
	const data = await response.json();
	return data;
};
