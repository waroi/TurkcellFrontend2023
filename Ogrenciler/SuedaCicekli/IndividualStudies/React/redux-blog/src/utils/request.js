
export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  if (response.status !== 200) {
    return "404";
  }

  return data;
};
