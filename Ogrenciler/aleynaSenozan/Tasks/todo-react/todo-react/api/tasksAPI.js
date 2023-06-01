import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const tasksAPI = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllTasks = async () => {
  const response = await tasksAPI.get('/tasks');
  return response.data;
};

export const createTask = async (task) => {
  const response = await tasksAPI.post('/tasks', task);
  return response.data;
};

export const updateTask = async (taskId, updatedTask) => {
  const response = await tasksAPI.put(`/tasks/${taskId}`, updatedTask);
  return response.data;
};

export const deleteTask = async (taskId) => {
  await tasksAPI.delete(`/tasks/${taskId}`);
};

export default tasksAPI;
