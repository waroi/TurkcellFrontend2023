class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HATAA");
    }
    const data = await response.json();
    return data;
  }
}

const request = new Request();
request
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
