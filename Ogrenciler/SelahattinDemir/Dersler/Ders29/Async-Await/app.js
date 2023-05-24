class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu");
    }
    const data = await response.json();
    return data;
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log("data", data))
  .catch((err) => console.log(err));
