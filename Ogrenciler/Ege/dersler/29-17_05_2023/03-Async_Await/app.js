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
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .get("http://localhost:3000/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
