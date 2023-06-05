const API_URL = "https://api.github.com/users";

export const getUserFromDb = async (userName) => {
	const response = await fetch(`${API_URL}/${userName}`);
	const data = await response.json();
	return data;
};

export const getUserReposFromDb = async (userName) => {
	const response = await fetch(`${API_URL}/${userName}/repos`);
	const data = await response.json();
	return data;
};
