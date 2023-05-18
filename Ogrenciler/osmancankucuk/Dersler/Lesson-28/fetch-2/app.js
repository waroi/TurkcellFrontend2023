class Request {
  constructor(id) {
    this.url = "https://jsonplaceholder.typicode.com/posts";
    this.id = id;
  }
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  post(data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

request = new Request();

// console.log(request.get());

request
  .post({
    title: "merhaba",
    userId: 2,
    body: "Merhaba body",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// request
//   .put(6, {
//     title: "asdsa",
//     userId: 1,
//     body: "Merhaba asdasd",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
