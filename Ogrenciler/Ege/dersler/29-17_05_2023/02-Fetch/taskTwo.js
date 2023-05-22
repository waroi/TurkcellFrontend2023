class Request {
  constructor(url) {
    this.url = url;
  }

  get(param, id = "") {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${param}/${id}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, "Veri alınamadı."));
    });
  }
  post(param, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${param}`, {
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
  put(param, id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${param}/${id}`, {
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
  delete(param, id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${param}/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => resolve("Veri silindi."))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request("https://jsonplaceholder.typicode.com");

// request
//   .get("posts", "1")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// request
//   .post("posts", {
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .put("posts", "1", {
//     userId: 100,
//     title: "Yeni Başlık",
//     body: "Yeni İçerik",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

request
  .delete("posts", "1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
