export const checkUserExist = async (data) => {
  const response = await fetch('http://localhost:3004/users');
  const users = await response.json();
  let result = users.find((user) => user.email === data.email);
  if (result !== undefined) {
    return result;
  } else {
    return false;
  }
};
