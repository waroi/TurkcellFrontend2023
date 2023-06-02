const API_URL = "http://localhost:3000";

export const getAllTodos = async () => {
	const response = await fetch(`${API_URL}/todos`);
	const data = await response.json();
	return data;
};

export const addTodo = async (todo) => {
	const response = await fetch(`${API_URL}/todos`, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ title: todo, completed: false }),
	});
	const data = await response.json();
	return data;
};

export const changeStatusTodo = async (id, title, status) => {
	const response = await fetch(`${API_URL}/todos/${id}`, {
		method: "PUT",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ title: title, completed: status }),
	});
	const data = await response.json();
	return data;
};

export const deleteTodo = async (id) => {
	const response = await fetch(`${API_URL}/todos/${id}`, {
		method: "DELETE",
	});
	const data = await response.json();
	return data;
};
