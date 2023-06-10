const URL = "https://newsapi.org/v2/top-headlines";
const apiKey = "58687735d29a4d8cbe9558af624c4f4f";

export const getNews = async (country, category) => {
	const response = await fetch(`${URL}?country=${country}&category=${category}&apiKey=${apiKey}`);
	const data = await response.json();
	return data;
};
