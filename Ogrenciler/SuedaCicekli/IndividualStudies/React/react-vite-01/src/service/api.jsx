const url = "http://localhost:3000";

export const getAllTodos = async () => {
  const response = await fetch(`${url}/todo`);
  const data = await response.json();
  return data;
};

export const addTodo = async (todo) => {
  const response = await fetch(`${url}/todo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${url}/todo/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const updateTodo = async (id, updatedTodo) => {
  console.log(id, updatedTodo);
  const response = await fetch(`${url}/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  const data = await response.json();
  return data;
};
