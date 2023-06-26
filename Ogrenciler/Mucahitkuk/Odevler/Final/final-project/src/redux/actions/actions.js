export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user,
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  payload: user,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
  payload: null,
});