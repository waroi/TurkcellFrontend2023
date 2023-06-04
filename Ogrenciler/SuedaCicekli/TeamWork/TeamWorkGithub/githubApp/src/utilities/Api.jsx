export const getUsers = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  const data = await response.json();
  // console.log(data)

  return data;
};
