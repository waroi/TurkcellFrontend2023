class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();
request
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .post("https://jsonplaceholder.typicode.com/posts", {
    userId: 2,
    title: "yeni başlık",
    body: "yeni içerik",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    userId: 2,
    title: "yeni başlık",
    body: "yeni içerik",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

request
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
