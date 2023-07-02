import BASE_URL from "./api";

const URL = `${BASE_URL}/users`;

export const getAllUsers = async () => {
	try {
		const response = await fetch(`${URL}`);
		if (!response.ok) {
			throw new Error("Kullanıcılar alınamadı");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Kullanıcılar alınırken hata oluştu:", error);
		throw error;
	}
};

export const getUserById = async (id) => {
	try {
		const response = await fetch(`${URL}/${id}`);
		if (!response.ok) {
			throw new Error("Kullanıcı verisi alınamadı");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Kullanıcı alınırken hata oluştu:", error);
		throw error;
	}
};

export const createNewUser = async (user) => {
	const allUsers = await getAllUsers();

	if (allUsers.some((u) => u.email === user.email)) {
		throw new Error("Bu email adresi kullanılmaktadır");
	}

	if (allUsers.some((u) => u.username === user.username)) {
		throw new Error("Bu kullanıcı adı kullanılmaktadır");
	}

	user.role = "user";

	const response = await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
	const data = await response.json();
	return data;
};

export const loginUser = async (user) => {
	const allUsers = await getAllUsers();
	return allUsers.find((u) => u.username === user.username && u.password === user.password);
};
