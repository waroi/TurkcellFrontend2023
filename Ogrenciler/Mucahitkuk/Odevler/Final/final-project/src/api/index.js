import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const createUser = async (user) => {
  try {
    const newUser = { ...user, id: self.crypto.randomUUID(), Cart: [] };
    const response = await axios.post(`${API_BASE_URL}/users`, newUser);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};


export const loginUser = async (user) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`, {
      params: {
        username: user.username,
        password: user.password,
      },
    });

    const matchedUsers = response.data.filter(
      (userData) =>
        userData.username === user.username && userData.password === user.password
    );

    if (matchedUsers.length > 0) {
      const matchedUser = matchedUsers[0];
      return matchedUser;
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    throw new Error('Error logging in user');
  }
};

export const getUserByUsername = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?username=${username}`);
    const users = response.data;
    if (users.length > 0) {
      return users[0];
    } else {
      return null; 
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?email=${email}`);
    const users = response.data;
    if (users.length > 0) {
      return users[0];
    } else {
      return null; 
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    throw error;
  }
};

